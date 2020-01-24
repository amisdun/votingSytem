const mongoose = require("mongoose")
mongoose.Promise = global.Promise
const candidate = require("../model/candidates")
require("../../index")

let delete_all_src_presidents = async (req,res,next) => {
    try {
        await candidate.src_president.deleteMany({}).exec()
        res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_all_src_general = async (req,res,next) => {
    try {
        await candidate.src_general.deleteMany({}).exec()
        res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_all_src_financial = async (req,res,next) => {
    try {
        await candidate.src_financial.deleteMany({}).exec()
        res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_all_nugs_financial = async (req,res,next) => {
    try {
        await candidate.nugs_financial.deleteMany({}).exec()
        res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_all_nugs_president = async (req,res,next) => {
    try {
        await candidate.nugs_president.deleteMany({}).exec()
        res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_all_nugs_general = async (req,res,next) => {
    try {
        await candidate.nugs_general.deleteMany({}).exec()
        res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

module.exports = {
    delete_all_nugs_financial,
    delete_all_nugs_general,
    delete_all_nugs_president,
    delete_all_src_financial,
    delete_all_src_general,
    delete_all_src_presidents
}