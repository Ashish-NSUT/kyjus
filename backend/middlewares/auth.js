const jwt = require('jsonwebtoken');
require("dotenv").config();
const User = require("../Models/User");

exports.Auth = async (req, res,next) => {
    try{
        const token = req.header("authToken") || req.cookies.token || req.body.token;

        if(!token) {
            res.status(401).send({
                success:false, 
                message: "Unauthorised"
            })
        }
        
        // Verify token
        try{
            const user = jwt.verify(token,process.env.JWT_SECRET);
            console.log(user);
            req.user = user;

        }catch(err) {
            console.log("Error while verifying token using jwt",err);
            res.status(401).send({
                success:false,
                message: "JWT issue"
            })
        }

        next();

    }catch(e){
        console.log(e);
        res.status(500).send({
            success:false,
            message: "Something went wrong while validating"
        });
    }
}


// IsStudent Check
exports.IsStudent = async (req, res, next) => {
    try{
        const role = req.user.role;

        if(role !== "Student"){
            res.status(401).send({
                success:false,
                message: "Only for Students!"
            });
        }
        next();

    }catch(e){
        console.log(e);
        res.status(500).send({
            success:false,
            message: "Student can't be Verified"
        });
    }
}



// IsInstructor Check
exports.IsInstructor = async (req, res, next) => {
    try{
        const role = req.user.role;

        if(role !== "Instructor"){
            res.status(401).send({
                success:false,
                message: "Only for Instructor!"
            });
        }
        next();

    }catch(e){
        console.log(e);
        res.status(500).send({
            success:false,
            message: "Instructor can't be Verified"
        });
    }
}


// IsAdmin Check
exports.IsAdmin = async (req, res, next) => {
    try{
        const role = req.user.role;

        if(role !== "Admin"){
            res.status(401).send({
                success:false,
                message: "Only for Admin!"
            });
        }
        next();

    }catch(e){
        console.log(e);
        res.status(500).send({
            success:false,
            message: "Admin can't be Verified"
        });
    }
}
