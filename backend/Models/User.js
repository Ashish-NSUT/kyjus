const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim:true
    },
    lastName:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim:true
    },
    password:{
        type: String,
        required: true,
    },
    accountType:{
        type: String,
        enum:["Student", "Admin", "Instructor"],
        required: true
    },
    additionalDetails:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Profile"
    },
    course: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],
    courseProgress: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress"
        }
    ],
    image:{
        type: String,
        required:true
    },
    token:{
        type:String
    },
    TokenExpiry:{
        type:Number,
    }
});

module.exports = mongoose.model("User", UserSchema);