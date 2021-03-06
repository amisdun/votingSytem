const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const candidates = require("../model/candidates")
require("../../index.js")

let register_src_president = async (req,res,next) => {
    let index_number = (req.body.index_number).toUpperCase();
    try {
        let src_president = await candidates.src_president.findOne({index_number: index_number}).exec()
        if(src_president) res.json({res: "exist"})
        else{
            await new candidates.src_president({
                _id: new mongoose.Types.ObjectId,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                index_number: index_number,
                program: req.body.program,
                level: req.body.level,
                passport_pic: req.body.passport_pic,
                total_votes: 0
            }).save()
            res.status(201).json({res: "created"})
        }
    } catch (error) {
        res.status(500).json({res: "An error has occured", err: "error"})
        console.log(error)
    }
}

let register_src_general = async (req,res,next) => {
    let index_number = (req.body.index_number).toUpperCase();
    try {
        let src_general = await candidates.src_general.findOne({index_number: index_number}).exec()
        if(src_general) res.json({res: "exist"})
        else{
            await new candidates.src_general({
                _id: new mongoose.Types.ObjectId,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                index_number: index_number,
                program: req.body.program,
                level: req.body.level,
                passport_pic: req.body.passport_pic,
                total_votes: 0
            }).save()
            res.status(201).json({res: "created"})
        }
    } catch (error) {
        res.status(500).json({res: "An error has occured", err: "error"})
    }
}

let register_src_financial = async (req,res,next) => {
    let index_number = (req.body.index_number).toUpperCase();
    try {
        let src_financial = await candidates.src_financial.findOne({index_number: index_number}).exec()
        if(src_financial) res.json({res: "exist"})
        else{
            await new candidates.src_financial({
                _id: new mongoose.Types.ObjectId,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                index_number: index_number,
                program: req.body.program,
                level: req.body.level,
                passport_pic: req.body.passport_pic,
                total_votes: 0
            }).save()
            res.status(201).json({res: "created"})
        }
    } catch (error) {
        res.status(500).json({res: "An error has occured", err: "error"})
    }
}

let register_nugs_president = async (req,res,next) => {
    let index_number = (req.body.index_number).toUpperCase();
    try {
        let nugs_president = await candidates.nugs_president.findOne({index_number: index_number}).exec()
        if(nugs_president) res.json({res: "exist"})
        else{
            await new candidates.nugs_president({
                _id: new mongoose.Types.ObjectId,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                index_number: index_number,
                program: req.body.program,
                level: req.body.level,
                passport_pic: req.body.passport_pic,
                total_votes: 0
            }).save()
            res.status(201).json({res: "created"})
        }
    } catch (error) {
        res.status(500).json({res: "An error has occured", err: "error"})
    }
}

let register_nugs_financial = async (req,res,next) => {
    let index_number = req.body.index_number;
    try {
        let nugs_financial = await candidates.nugs_financial.findOne({index_number: index_number}).exec()
        if(nugs_financial) res.json({res: "exist"})
        else{
            await new candidates.nugs_financial({
                _id: new mongoose.Types.ObjectId,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                index_number: index_number,
                program: req.body.program,
                level: req.body.level,
                passport_pic: req.body.passport_pic,
                total_votes: 0
            }).save()
            res.status(201).json({res: "created"})
        }
    } catch (error) {
        res.status(500).json({res: "An error has occured", err: "error"})
    }
}

let register_nugs_general = async (req,res,next) => {
    let index_number = (req.body.index_number).toUpperCase();
    try {
        let nugs_general = await candidates.nugs_general.findOne({index_number: index_number}).exec()
        if(nugs_general) res.json({res: "exist"})
        else{
            await new candidates.nugs_general({
                _id: new mongoose.Types.ObjectId,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                index_number: index_number,
                program: req.body.program,
                level: req.body.level,
                passport_pic: req.body.passport_pic,
                total_votes: 0
            }).save()
            res.status(201).json({res: "created"})
        }
    } catch (error) {
        res.status(500).json({res: "An error has occured", err: "error"})
    }
}

module.exports = {
    register_nugs_financial,
    register_nugs_general,
    register_nugs_president,
    register_src_financial,
    register_src_general,
    register_src_president
}