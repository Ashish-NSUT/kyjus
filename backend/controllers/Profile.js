const Profile = require('../Models/Profile');
const User = require('../Models/User');
const Course = require('../Models/Course');
const {uploadImage} = require("../utils/ImageUploader")

// Update profile
exports.updateProfile = async (req, res) => {
    try{
        const {gender, dateOfBirth,about,contact} = req.body;
        
        const user = await User.findById(req.user.id);

        const profileId = user.additionalDetails;

        const updateProfile = await Profile.findByIdAndUpdate(profileId, {gender : gender, dateOfBirth : dateOfBirth, about : about, contact:contact}, {new:true});

        return res.status(200).send({
            success: true,
            message: "Update Profile!",
            updateProfile
        })

    }catch(err) {
        console.log("Error while updating Profile: ", err);
        return res.status(500).send({
            success: false,
            message: "Something Went Wrong while updating Profile"
        })
    }

}

// Delete a Account

exports.deleteProfile = async (req, res) => {
    try{
        const id = req.user.id;

        const user = await User.findById(id);
        if(!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            })
        }

        const profile = user.additionalDetails;

        // delete the profile
        await Profile.findByIdAndDelete(profile);

        //unenroll user from all courses
        user.course.forEach((courseId)=>{
            Course.findByIdAndUpdate(
                {
                  _id: courseId
                },
                {
                  $pull: {
                    studentsEnrolled: {
                      $elemMatch: {$eq: id }
                    }
                  }
                },)
        })

        //delete User
        await User.findByIdAndDelete(id);


         return res.status(200).send({
            success: true,
            message: "Profile Deleted!",
            user
        })

    }catch(err) {
        console.log("Error while delete Profile: ", err);
        return res.status(500).send({
            success: false,
            message: "Something Went Wrong while deleting Profile"
        })
    }
}

exports.getAllUserDetails = async (req, res) => {
	try {
		const id = req.user.id;
		const userDetails = await User.findById(id)
			.populate("additionalDetails")
			.exec();
		console.log(userDetails);
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: userDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImage(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};
  
exports.getEnrolledCourses = async (req, res) => {
    try {
      const userId = req.user.id
      const userDetails = await User.findOne({
        _id: userId,
      })
        .populate("course")
        .exec()
        
      if (!userDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find user with id: ${userDetails}`,
        })
      }
      return res.status(200).json({
        success: true,
        data: userDetails.course,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};   