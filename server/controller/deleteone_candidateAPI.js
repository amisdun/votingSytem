const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const candidate = require("../model/candidates")
require("../../index")

let delete_one_src_president = async (req,res,next) => {
    let id = req.params.id
    try {
       await candidate.src_president.findByIdAndDelete(id).exec()
       res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_one_src_financial = async (req,res,next) => {
    let id = req.params.id
    try {
       await candidate.src_financial.findByIdAndDelete(id).exec()
       res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_one_src_general = async (req,res,next) => {
    let id = req.params.id
    try {
       await candidate.src_general.findByIdAndDelete(id).exec()
       res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_one_nugs_president = async (req,res,next) => {
    let id = req.params.id
    try {
       await candidate.nugs_president.findByIdAndDelete(id).exec()
       res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_one_nugs_financial = async (req,res,next) => {
    let id = req.params.id
    try {
       await candidate.nugs_financial.findByIdAndDelete(id).exec()
       res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let delete_one_nugs_general = async (req,res,next) => {
    let id = req.params.id
    try {
       await candidate.nugs_general.findByIdAndDelete(id).exec()
       res.json({res: "deleted"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

module.exports = {
    delete_one_nugs_financial,
    delete_one_nugs_general,
    delete_one_nugs_president,
    delete_one_src_financial,
    delete_one_src_general,
    delete_one_src_president
}