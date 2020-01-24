const express = require("express")
const signin = require("../controller/student_signinAPI")

let router = express.Router()

router.post("/signin",signin)

module.exports = router