const express = require("express");
const router = express.Router();
require("../../index");
const signup = require("../controller/admin_signupAPI")

router.post("/signup",signup)

module.exports = router