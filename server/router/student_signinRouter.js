const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/webtoken_auth")
require("../../index.js");
const signin = require("../controller/student_signinAPI")

router.post("/signin",signin.student_singin)
router.post("/otp_verify" , signin.otp_verify)

module.exports = router