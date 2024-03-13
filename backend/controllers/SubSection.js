const Course = require("../Models/Course");
const Section = require("../Models/Section");
const Subsection = require("../Models/Subsection");
const { uploadImage } = require("../utils/ImageUploader");
require("dotenv").config();

//create Section
exports.createSubSection = async (req, res) => {
    try{
        const {section, title, description,duration} = req.body;
        const video = req.files.video;

        if(!section || !title || !description || !duration) {
            return res.status(404).send({
                success: false,
                message: "Enter All Details"
            })
        }
        console.log(video);



        // upload image to cloudinary
        const videoUrl = await uploadImage(
            video,
            process.env.FOLDER_NAME
        );
        console.log(videoUrl);
  
        const newSubSection = await Subsection.create({title,duration, description,videoUrl:videoUrl.secure_url});

        // update subSection in Section

        const updateSection = await Section.findByIdAndUpdate(section, {$push :{subsection:newSubSection._id}},{new:true});

        return res.status(200).send({
            success: true,  
            message: "Section Created",
            newSubSection
        })


    }catch(err) {
        console.log("Error while adding new section: ", err);
        return res.status(500).send({
            success: false,
            message: "Something Went Wrong"
        })
    }
}

// update Sections

exports.updateSubSection = async (req, res) => {
    try{
        const {newName, subsectionId} = req.body;

        if(!newName || !subsectionId) {
            return res.status(400).send({
                success: false,
                message: "Details not found"
            })
        }

        const updateSubSection = await Subsection.findByIdAndUpdate(subsectionId, {$push :{name: newName}},{new:true});
        console.log(updateSubSection);
        return res.status(200).send({
            success: true,
            message: "Section Updated",
            updateSubSection
        })



    }catch(err) {
        console.log("Error while updating section: ", err);
        return res.status(500).send({
            success: false,
            message: "Something Went Wrong"
        })
    }
}

// Delete Section

exports.deleteSubSection = async (req, res) => {
    const {updateSubSection} = req.params;

    if(!updateSubSection) {
        return res.status(400).send({
            success: false,
            message: "Details not found"
        })
    }

    const deletedsubSection = await Course.findByIdAndDelete(updateSubSection);
        console.log(deletedsubSection);
        return res.status(200).send({
            success: true,
            message: "Section Deleted Succesfully"
        })


}