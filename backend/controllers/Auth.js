const User = require('../Models/User');
const Otp = require('../Models/Otp');
const Profile = require('../Models/Profile');
const  OTPgenerator = require('otp-generator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const sendMail = require("../utils/NodeMailer");
dotenv.config();

// send OTP

exports.sendOTP = async (req, res) => {
    try{
        const {email} = req.body;
        //check if user exists 
        const currentUser = await User.findOne({email});

        if(currentUser) {
            return res.status(401).send({
                success: false,
                message: "User Already Exists"
            });
        }

        //generate OTP
        let OTP = OTPgenerator.generate(6,{
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        });

        // check unique OTP
        const result = await Otp.findOne({ otp: OTP });
		console.log("Result is Generate OTP Func");
		console.log("OTP", OTP);
		console.log("Result", result);
		while (result) {
			OTP = OTPgenerator.generate(6, {
				upperCaseAlphabets: false,
			});
		}
		const otpPayload = { email:email, otp:OTP };

		const otpBody = await Otp.create(otpPayload);

        res.status(200).send({
            success: true,
            message: "OTP Sent Succesfully!",
            OTP
        })

    }catch(err) {
        console.log("error while taking email for OTP: ", err);
    }

     
}


//Sign Up

exports.signup = async (req, res) => {
    try{
        const {firstName, lastName, email, password,contactNumber, otp, accountType} = req.body;

        if(!firstName || !lastName || !email || !password || !otp) {
            return res.status(401).send({
                success: false,
                message: "All fields are required"
            })
        }

        // check if email exists

        const currentUser = await User.findOne({email});

        if(currentUser) {
            return res.status(403).send({
                success: false,
                message: "Email Already registered"
            })
        }

        //fetch OTP
        const OTP = await Otp.find({email}).sort({createdAt:-1}).limit(1);
        console.log(OTP.length);
        // console.log(OTP[0].otp);

        // validate OTP

        if(OTP.length === 0) {
            return res.status(403).send({
                success: false,
                message: "OTP not Found"
            })
        }

        else if(otp !== OTP[0].otp) {
            return res.status(403).send({
                success: false,
                message: "OTP doesn't Match"
            })
        }

        // Hash the Password
        const hashedPass = await bcrypt.hash(password,10);

        const Profiledetails = await Profile.create({
            gender:null,
            dateOfBirth: null,
            about:null,
            contact :contactNumber
        })

        // create user
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPass,
            accountType,
            contactNumber,
            additionalDetails: Profiledetails._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        })


        res.status(200).send({
            success: true,
            message: "User Registered Succesfully",
            user
        })


    }catch(err){
        console.log("Error while Signing up: ", err);
    }
};



// Login 

exports.login = async (req, res) => {
    try{
        const {email,password} = req.body;

        // check if email exists

        const user = await User.findOne({email}).populate("additionalDetails");

        if(!user) {
            return res.status(400).send({
                success: false,
                message: "User is not registered"
            })
        }

        // compare password

        const checkPass = await bcrypt.compare(password,user.password);

        if(checkPass === false) {
            return res.status(403).send({
                success: false,
                message: "Incorrect Deatils"
            })
        }

        // create token using jwt
        const payload = {
            email: user.email,
            id: user._id,
            role: user.accountType
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET, {
            expiresIn:"24h",
        });

        user.token =  token;
        user.password = undefined;

        //create cookie

        const options = {
            expires: new Date(Date.now() + 3*24*3600*1000),
            httpOnly: true
        };

        res.cookie("token", token, options).status(200).send({
            success:true,
            message: "Logged in successfully",
            token,
            user,
        })



    }catch(err){
        console.log("Error while Logging In: ", err);
        res.status(500).send({
            success:false,
            message: "Login Faliure"
        })
    }
};

// Change Password

exports.changePassword = async (req, res) => {
    try{
        const {oldPassword, newPassword} = req.body;


        const user = await User.findById(req.user.id);

        // compare current password
        const checkPass = await bcrypt.compare(oldPassword, user.password);

        if(!checkPass) {
            return res.status(403).send({
                success:false,
                message: "Old Password is incorrect"
            })
        }

        // hash new password
        const hashedPass = await bcrypt.hash(newPassword,10);


        // Update password in DB
        const updatedPassword = await User.findOneAndUpdate(user._id,{password:hashedPass}, {new:true});

        sendMail(user.email, "<h2>Password updated successfully<h2>", "Password updated")

        res.status(200).send({
            success:true,
            message: "Password updated successfully"
        })

        

    }catch(e){
        console.log("Error while changing password: ", e);

    }
}

