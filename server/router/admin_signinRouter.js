const express = require("express");
const router = express.Router();
require("../../index.js");
const signin = require("../controller/admin_signinAPI")

router.post("/signin",signin)

module.exports = router