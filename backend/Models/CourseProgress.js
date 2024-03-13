const mongoose = require('mongoose');

const CourseProgressSchema = new mongoose.Schema({
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    completedVideos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Subsection"
        }
    ],
    
    
});

module.exports = mongoose.model("CourseProgress", CourseProgressSchema);