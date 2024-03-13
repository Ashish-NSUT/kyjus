const rating = require("../Models/Rating");
const Course = require("../Models/Course");

// create rating

exports.createRating = async (req, res) => {
  try {
    const { rating, review, courseId } = req.body;
    const userId = req.user.id;

    const checkCourse = await Course.findById(courseId);

    if (!checkCourse) {
      return res.status(404).send({
        success: false,
        message: "Course not found",
      });
    }

    if (!checkCourse.studentsEnrolled.includes(userId)) {
      return res.status(404).send({
        success: false,
        message: "Unauthorized for rating",
      });
    }

    const checkRating = await rating.findOne({
      user: userId,
      course: courseId,
    });

    if (!checkRating) {
      return res.status(404).send({
        success: false,
        message: "Already rated",
      });
    }

    const newRating = await rating.create({
      user: userId,
      course: courseId,
      rating,
      review,
    });

    const updatedCourse = await Course.findByIdAndUpdate(courseId, {
      $push: { rating: newRating },
    });
    console.log(updatedCourse);

    return res.status(200).send({
      success: true,
      message: "Review Added",
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

// get avg rating

exports.getAverageRating = async (req, res) => {
  try {
    const { courseId } = req.body;

    const result = await rating.aggregate([
      {
        $match: {
          course: new mongoose.Types.ObjectId(courseId),
        },
      },
      {
        $group: {
          _id: null,
          average: { $avg: "rating" },
        },
      },
    ]);

    if (result.length > 0) {
      return res.status(200).send({
        success: true,
        avgRating: result[0].average,
      });
    }

    return res.status(400).send({
      success: false,
      message: "No ratings to show",
      avgRating: result[0].average,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

// get all ratings for

exports.getAllRating = async (req, res) => {
  try {
    const { courseId } = req.body;

    const ratings = await rating
      .find({ course: courseId })
      .sort({ rating: "dec" })
      .populate({
        path: "User",
        populate: "firstName lastName email image",
      })
      .populate({
        path: "Course",
        populate: "name",
      })
      .exec();

    return res.status(200).send({
      success: true,
      message: "Reviews Fetched",
      ratings,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};
