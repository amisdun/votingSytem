const express = require("express")
const register = require("../controller/create_candidatesAPI")
const delete_all = require("../controller/deleteall_candidatesAPI")
const delete_one = require("../controller/deleteone_candidateAPI")
const show_one = require("../controller/showone_candidateAPI")
const show_all = require("../controller/showall_candidatesAPI")

let router = express.Router()

// creating new candidates
router.post("/src_president",register.register_src_president)
router.post("/src_general",register.register_src_general)
router.post("/src_financial",register.register_src_financial)
router.post("/nugs_president",register.register_nugs_president)
router.post("/nugs_general",register.register_nugs_general)
router.post("/nugs_financial",register.register_nugs_financial)

module.exports = router;