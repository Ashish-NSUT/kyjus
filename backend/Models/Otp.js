const mongoose = require('mongoose');
const MailSender = require('../utils/NodeMailer');
const emailTemplate = require("../mail/templates/emailVerificationTemplate");


const OtpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires: 300000
    }
});

const sendOTP = async (email,otp) => {
    try{
        const mailResponse = await MailSender(email,emailTemplate(otp),"OTP Verification");

        console.log("mail Response: ", mailResponse);

    }catch(err){
        console.log("error occcured while sending OTP: ", err);
        throw err;
    }
};

OtpSchema.pre("save", async function(next) {
    console.log("yaha dekho:" ,this.email);
    await sendOTP(this.email, this.otp);
    next();
})

module.exports = mongoose.model("Otp", OtpSchema); 