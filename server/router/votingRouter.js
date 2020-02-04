const express = require("express")
const router = express.Router()
const votes = require("../controller/voting_API")
const authenticate = require("../middleware/webtoken_auth")

router.put("/src_president/:id",authenticate,votes.src_president_vote)
router.put("/src_general/:id",authenticate,votes.src_general_vote)
router.put("/src_financial/:id",authenticate,votes.src_financial_vote)
router.put("/nugs_financial/:id",authenticate,votes.nugs_financial_vote)
router.put("/nugs_general/:id",authenticate,votes.nugs_general_vote)
router.put("/nugs_president/:id",authenticate,votes.nugs_president_vote)


module.exports = router