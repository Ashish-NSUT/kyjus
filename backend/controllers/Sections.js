const Course = require("../Models/Course");
const Section = require("../Models/Section");

//create Section
exports.createSection = async (req, res) => {
  try {
    const { course, sectionName } = req.body;

    if (!course || !sectionName) {
      return res.status(404).send({
        success: false,
        message: "Enter All Details",
      });
    }

    const newSection = await Section.create({ name: sectionName });

    // update Sectionin course

    const updateCourse = await Course.findByIdAndUpdate(
      course,
      { $push: { courseContent: newSection._id } },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "Section Created",
      newSection,
    });
  } catch (err) {
    console.log("Error while adding new section: ", err);
    return res.status(500).send({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

// update Sections

exports.updateSection = async (req, res) => {
  try {
    const { newName, sectionId } = req.body;

    if (!newName || !sectionId) {
      return res.status(400).send({
        success: false,
        message: "Details not found",
      });
    }

    const updateSection = await Section.findByIdAndUpdate(
      sectionId,
      { $push: { name: newName } },
      { new: true }
    );
    console.log(updateSection);
    return res.status(200).send({
      success: true,
      message: "Section Updated",
      updateSection,
    });
  } catch (err) {
    console.log("Error while updating section: ", err);
    return res.status(500).send({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

// Delete Section

exports.deleteSection = async (req, res) => {
  const { sectionId } = req.params;

  if (!sectionId) {
    return res.status(400).send({
      success: false,
      message: "Details not found",
    });
  }

  const deletedSection = await Section.findByIdAndDelete(sectionId);
  console.log(deletedSection);
  return res.status(200).send({
    success: true,
    message: "Section Deleted Succesfully",
  });
};
