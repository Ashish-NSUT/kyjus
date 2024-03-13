const express = require("express")
const router = express.Router()

const { capturePayment, verifySignature } = require("../controllers/Payments")
const { Auth, IsInstructor, IsStudent, IsAdmin } = require("../middlewares/auth")
router.post("/capturePayment", Auth, IsStudent, capturePayment)
router.post("/verifySignature", verifySignature)

module.exports = router