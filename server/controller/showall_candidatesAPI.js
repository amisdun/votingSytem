const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const candidate = require("../model/candidates")
require("../../index")

let show_all_src_president = async (req,res,next) => {
    try {
        let all_candidate = await candidate.src_president.find({}).exec()
        if(all_candidate.length >= 1) res.status(200).json({res: "candidates",data: all_candidate})
        else{res.json({res: "No data found"})}
    } catch (error) {
        res.json({res: "An error has occured"})
    }   
}

let show_all_src_financial = async (req,res,next) => {
    try {
        let all_candidate = await candidate.src_financial.find({}).exec()
        if(all_candidate.length >= 1) res.status(200).json({res: "candidates",data: all_candidate})
        else{res.json({res: "No data found"})}
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }   
}

let show_all_src_general = async (req,res,next) => {
    try {
        let all_candidate = await candidate.src_general.find({}).exec()
        if(all_candidate.length >= 1) res.status(200).json({res: "candidates",data: all_candidate})
        else{res.json({res: "No data found"})}
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }   
}

let show_all_nugs_president = async (req,res,next) => {
    try {
        let all_candidate = await candidate.nugs_president.find({}).exec()
        if(all_candidate.length >= 1) res.status(200).json({res: "candidates",data: all_candidate})
        else{res.json({res: "No data found"})}
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }   
}

let show_all_nugs_financial = async (req,res,next) => {
    try {
        let all_candidate = await candidate.nugs_financial.find({}).exec()
        if(all_candidate.length >= 1) res.status(200).json({res: "candidates",data: all_candidate})
        else{res.json({res: "No data found"})}
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }   
}

let show_all_nugs_general = async (req,res,next) => {
    try {
        let all_candidate = await candidate.nugs_general.find({}).exec()
        if(all_candidate.length >= 1) res.status(200).json({res: "candidates",data: all_candidate})
        else{res.json({res: "No data found"})}
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }   
}

module.exports = {
    show_all_nugs_financial,
    show_all_nugs_general,
    show_all_nugs_president,
    show_all_src_financial,
    show_all_src_general,
    show_all_src_president
}