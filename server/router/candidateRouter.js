
const express = require("express");
const router = express.Router();
require("../../index");
const register = require("../controller/create_candidatesAPI")
const delete_all = require("../controller/deleteall_candidatesAPI")
const delete_one = require("../controller/deleteone_candidateAPI")
const show_one = require("../controller/showone_candidateAPI")
const show_all = require("../controller/showall_candidatesAPI")
const update_one = require("../controller/updateone_candidateAPI")


// creating new candidates
router.post("/src_president",register.register_src_president)
router.post("/src_general",register.register_src_general)
router.post("/src_financial",register.register_src_financial)
router.post("/nugs_president",register.register_nugs_president)
router.post("/nugs_general",register.register_nugs_general)
router.post("/nugs_financial",register.register_nugs_financial)

// deleting all candidates
router.delete("/src_president",delete_all.delete_all_src_presidents)
router.delete("/src_general",delete_all.delete_all_src_general)
router.delete("/src_financial",delete_all.delete_all_src_financial)
router.delete("/nugs_president",delete_all.delete_all_nugs_president)
router.delete("/nugs_financial",delete_all.delete_all_nugs_financial)
router.delete("/nugs_general",delete_all.delete_all_nugs_general)

// deleting one candidate
router.delete("/src_president/:id",delete_one.delete_one_src_president)
router.delete("/src_general/:id",delete_one.delete_one_src_general)
router.delete("/src_financial/:id",delete_one.delete_one_src_financial)
router.delete("/nugs_president/:id",delete_one.delete_one_nugs_president)
router.delete("/nugs_financial/:id",delete_one.delete_one_nugs_financial)
router.delete("/nugs_general/:id",delete_one.delete_one_nugs_general)

// showing single candidate
router.get("/src_president/:id",show_one.show_one_src_president)
router.get("/src_general/:id",show_one.show_one_src_general)
router.get("/src_financial/:id",show_one.show_one_src_financial)
router.get("/nugs_president/:id",show_one.show_one_nugs_president)
router.get("/nugs_general/:id",show_one.show_one_nugs_general)
router.get("/nugs_financial/:id",show_one.show_one_nugs_financial)

// showing all candidate
router.get("/src_president",show_all.show_all_src_president)
router.get("/src_financial",show_all.show_all_src_financial)
router.get("/src_general",show_all.show_all_src_general)
router.get("/nugs_president",show_all.show_all_nugs_president)
router.get("/nugs_financial",show_all.show_all_nugs_financial)
router.get("/nugs_general",show_all.show_all_nugs_general)

// updating single candidate
router.patch("/src_president/:id",update_one.update_one_src_president)
router.patch("/src_financial/:id",update_one.update_one_src_financial)
router.patch("/src_general/:id",update_one.update_one_src_general)
router.patch("/nugs_president/:id",update_one.update_one_nugs_president)
router.patch("/nugs_financial/:id",update_one.update_one_nugs_financial)
router.patch("/nugs_general/:id",update_one.update_one_nugs_general)

module.exports = router;