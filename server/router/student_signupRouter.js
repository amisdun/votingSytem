const express = require("express");
const router = express.Router();
require("../../index.js");
const signup = require("../controller/student_signupAPI")
const authenticate = require("../middleware/token_admin")

router.post("/signup",signup)

module.exports = router