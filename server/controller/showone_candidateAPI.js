const mongoose = require("mongoose")
const candidate = require("../model/candidates")
require("../../index")

let show_one_src_president = async (req,res,next) => {
    let id = req.params.id;
    try {
        let find_one = await candidate.src_president.findById(id).exec()
        if(find_one) res.json({res: "found",data: find_one})
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }
}

let show_one_src_general = async (req,res,next) => {
    let id = req.params.id;
    try {
        let find_one = await candidate.src_general.findById(id).exec()
        if(find_one) res.json({res: "found",data: find_one})
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }
}

let show_one_src_financial = async (req,res,next) => {
    let id = req.params.id;
    try {
        let find_one = await candidate.src_financial.findById(id).exec()
        if(find_one) res.json({res: "found",data: find_one})
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }
}

let show_one_nugs_president = async (req,res,next) => {
    let id = req.params.id;
    try {
        let find_one = await candidate.nugs_president.findById(id).exec()
        if(find_one) res.json({res: "found",data: find_one})
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }
}

let show_one_nugs_financial = async (req,res,next) => {
    let id = req.params.id;
    try {
        let find_one = await candidate.nugs_financial.findById(id).exec()
        if(find_one) res.json({res: "found",data: find_one})
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }
}

let show_one_nugs_general = async (req,res,next) => {
    let id = req.params.id;
    try {
        let find_one = await candidate.nugs_general.findById(id).exec()
        if(find_one) res.json({res: "found",data: find_one})
    } catch (error) {
        res.status(500).json({res: "An error has occured"})
    }
}

module.exports = {
    show_one_nugs_financial,
    show_one_nugs_general,
    show_one_nugs_president,
    show_one_src_financial,
    show_one_src_general,
    show_one_src_president
}