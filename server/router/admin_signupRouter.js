const express = require("express")
const signup = require("../controller/admin_signupAPI")

let router = express.Router()

router.post("/signup",signup)

module.exports = router