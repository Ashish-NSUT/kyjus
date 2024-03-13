const Course = require("../Models/Course");
const Tags = require("../Models/Categories");
const User = require("../Models/User");
const { uploadImage } = require("../utils/ImageUploader");
require("dotenv").config();

exports.createCourse = async (req, res) => {
  try {
    const { name, description, whatYouWillLearn, price, tag } = req.body;

    const userId = req.user.id;

    const thumbnail = req.files.thumbnail;

    if (
      !thumbnail ||
      !name ||
      !description ||
      !whatYouWillLearn ||
      !price ||
      !tag
    ) {
      return res.status(401).send({
        success: false,
        message: "All Fields are required",
      });
    }

    // const instructorDetails = await User.findById(req.user.id);

    // if (!instructorDetails) {
    //   return res.status(401).send({
    //     success: false,
    //     message: "Instructor not Found",
    //   });
    // }

    // get Tag Details

    const TagDetails = await Tags.findById(tag);
    if (!TagDetails) {
      return res.status(401).send({
        success: false,
        message: "Tag not Found",
      });
    }

    // upload image to cloudinary
    const thumbnailImage = await uploadImage(
      thumbnail,
      process.env.FOLDER_NAME
    );

    //create an new course

    const newCourse = await Course.create({
      courseName: name,
      courseDescription: description,
      instructor: userId,
      whatYouWillLearn,
      price,
      tag: TagDetails._id,
      thumbnail: thumbnailImage.secure_url,
    });

    //update instructor courses
    await User.findByIdAndUpdate(
      { _id: userId },
      { $push: { courses: newCourse._id } },
      { new: true }
    );

    //update Tags
    await Tags.findByIdAndUpdate(
      { _id: TagDetails._id },
      { $push: { courses: newCourse._id } },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "New Course Added",
      data: newCourse,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

// Get All Courses

exports.GetAllCourse = async (req, res) => {
  try {
    const AllCourse = await Course.find(
      {},
      { courseName: true, price: true, thumbnail: true, instructor: true }
    )
      .populate("instructor")
      .exec();

    return res.status(200).send({
      success: true,
      message: "Courses Fetched",
      data: AllCourse,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

// get Course Details

exports.getCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body;

    const details = await Course.findById(courseId)
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("rating")
      .populate("category")
      .populate({
        path: "courseContent",
        populate: {
          path: "subsection",
        },
      })
      .exec();

    if (!details) {
      return res.status(500).send({
        success: false,
        message: "Course not Found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Course Fetched",
      details,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};
