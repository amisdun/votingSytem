const express = require("express");
const router = express.Router();
require("../../index");

const reset_system = require("../controller/reset_systemAPI")
const admin_token_auth = require("../middleware/token_admin")

router.delete("/reset_system",admin_token_auth,reset_system)

module.exports = router