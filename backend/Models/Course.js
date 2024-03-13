const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    trim: true,
  },
  courseDescription: {
    type: String,
    trim: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  whatYouWillLearn: {
    type: String,
  },
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Section",
    },
  ],
  rating: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Rating",
    },
  ],
  price: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  tags:[{
    type:[String] 
  }],
  studentsEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }],
  instructions:{
    type:[String]
  },
  status:{
    type:[String],
    enum: ["Draft","Published"], 
  }
});

module.exports = mongoose.model("Course", CourseSchema);
