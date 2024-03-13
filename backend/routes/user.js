// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendOTP,
  changePassword,
} = require("../controllers/Auth")
const {
  resetLink,
  resetPassword,
} = require("../controllers/ResetPassword")

const { Auth } = require("../middlewares/auth")

// Routes for Login, Signup, and Authentication

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP)

// Route for Changing the password
router.post("/changepassword", Auth, changePassword)

// Route for generating a reset password token
router.post("/reset-password-token", resetLink)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)

// Export the router for use in the main application
module.exports = router