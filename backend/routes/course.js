// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
  createCourse,
  GetAllCourse,
  getCourseDetails,
} = require("../controllers/Courses")


// Categories Controllers Import
const {
  getAllCategories,
  createCategory,
  categorypagedetails,
} = require("../controllers/Categories")

// Sections Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Sections")

// Sub-Sections Controllers Import
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection")

// Rating Controllers Import
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/Ratings")

// Importing Middlewares
const { Auth, IsInstructor, IsStudent, IsAdmin } = require("../middlewares/auth")


// routes

// Courses can Only be Created by Instructors
router.post("/createCourse", Auth, IsInstructor, createCourse)
//Add a Section to a Course
router.post("/addSection", Auth, IsInstructor, createSection)
// Update a Section
router.post("/updateSection", Auth, IsInstructor, updateSection)
// Delete a Section
router.post("/deleteSection", Auth, IsInstructor, deleteSection)
// Edit Sub Section
router.post("/updateSubSection", Auth, IsInstructor, updateSubSection)
// Delete Sub Section
router.post("/deleteSubSection", Auth, IsInstructor, deleteSubSection)
// Add a Sub Section to a Section
router.post("/addSubSection", Auth, IsInstructor, createSubSection)
// Get all Registered Courses
router.get("/getAllCourses", GetAllCourse)
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails)


// by admin
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", Auth, IsAdmin, createCategory)
router.get("/showAllCategories", getAllCategories)
router.post("/getCategoryPageDetails", categorypagedetails)

// rating and review 
router.post("/createRating", Auth, IsStudent, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRating)

module.exports = router