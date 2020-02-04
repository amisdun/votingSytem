const mongoose = require("mongoose")
const db = require("../db_connection/mongodb")
require("../../index")
mongoose.Promise = global.Promise
const student = require("../model/signup")
const candidate = require("../model/candidates")

let reset_system  = async (req,res,next) => {
    try {
        
            let data = {
                src_president_vote: false,
                src_financial_vote: false,
                src_general_vote: false,
                nugs_president_vote: false,
                nugs_financial_vote: false,
                nugs_general_vote: false
            }
            await student.student.updateMany({},data).exec()
            await candidate.nugs_financial.deleteMany({}).exec()
            await candidate.nugs_general.deleteMany({}).exec()
            await candidate.nugs_president.deleteMany({}).exec()
            await candidate.src_financial.deleteMany({}).exec()
            await candidate.src_general.deleteMany({}).exec()
            await candidate.src_president.deleteMany({}).exec()

            res.json({res: "done", msg: "system reset successful"})
    } catch (error) {
        res.status(500).json({res: "an error ocuured"})
        console.log(error)
    }
}

module.exports = reset_system