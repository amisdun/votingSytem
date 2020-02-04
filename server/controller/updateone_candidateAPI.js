const mongoose =  require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const candidate = require("../model/candidates")
require("../../index")

let update_one_src_president = async (req,res,next) => {
    let id = req.params.id;
    let data = {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        program: req.body.program,
        index_number: req.body.index_number,
        level: req.body.level,
        passport_pic: req.body.passport_pic
    }
    try {
        await candidate.src_president.findByIdAndUpdate(id,data).exec()
        res.json({res: "updated"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let update_one_src_general = async (req,res,next) => {
    let id = req.params.id;
    let data = {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        program: req.body.program,
        index_number: req.body.index_number,
        level: req.body.level,
        passport_pic: req.body.passport_pic
    }
    try {
        await candidate.src_general.findByIdAndUpdate(id,data).exec()
        res.json({res: "updated"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let update_one_src_financial = async (req,res,next) => {
    let id = req.params.id;
    let data = {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        program: req.body.program,
        index_number: req.body.index_number,
        level: req.body.level,
        passport_pic: req.body.passport_pic
    }
    try {
        await candidate.src_financial.findByIdAndUpdate(id,data).exec()
        res.json({res: "updated"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let update_one_nugs_financial = async (req,res,next) => {
    let id = req.params.id;
    let data = {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        program: req.body.program,
        index_number: req.body.index_number,
        level: req.body.level,
        passport_pic: req.body.passport_pic
    }
    try {
        await candidate.nugs_financial.findByIdAndUpdate(id,data).exec()
        res.json({res: "updated"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let update_one_nugs_general = async (req,res,next) => {
    let id = req.params.id;
    let data = {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        program: req.body.program,
        index_number: req.body.index_number,
        level: req.body.level,
        passport_pic: req.body.passport_pic
    }
    try {
        await candidate.nugs_general.findByIdAndUpdate(id,data).exec()
        res.json({res: "updated"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

let update_one_nugs_president = async (req,res,next) => {
    let id = req.params.id;
    let data = {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        program: req.body.program,
        index_number: req.body.index_number,
        level: req.body.level,
        passport_pic: req.body.passport_pic
    }
    try {
        await candidate.nugs_president.findByIdAndUpdate(id,data).exec()
        res.json({res: "updated"})
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}


module.exports = {
    update_one_nugs_financial,
    update_one_nugs_general,
    update_one_nugs_president,
    update_one_src_financial,
    update_one_src_general,
    update_one_src_president
}