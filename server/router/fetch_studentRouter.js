const express = require("express");
const router = express.Router();
require("../../index");

const fetch_student = require("../controller/fetch_studentsAPI")

router.get("/fetch",fetch_student.fetch_all_student)
router.get("/:id",fetch_student.fetch_one_student)

module.exports = router