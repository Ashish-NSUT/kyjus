const express = require("express")
const router = express.Router()
const { Auth } = require("../middlewares/auth")
const {
  deleteProfile,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile",Auth, deleteProfile)
router.put("/updateProfile", Auth, updateProfile)
router.get("/getUserDetails", Auth, getAllUserDetails)
// Get Enrolled Courses
router.get("/getEnrolledCourses", Auth, getEnrolledCourses)
router.put("/updateDisplayPicture", Auth, updateDisplayPicture)

module.exports = router