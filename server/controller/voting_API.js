const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const candidate = require("../model/candidates")
const student = require("../model/signup")
require("../../index")

let src_president_vote = async (req,res,next) => {
    let id = req.params.id
    let src_president = await candidate.src_president.findById(id).exec()
    if(src_president){
        let new_vote = src_president.total_votes + 1;
        await candidate.src_president.updateOne({_id:id},{total_votes: new_vote}).exec()
        
        let data = {src_president_vote: true}
        await student.student.updateOne({_id:req.user.userId},data).exec()

        let student_new_details = await student.student.findById(req.user.userId)
        if(student_new_details){
            res.json({res: "vote added", data: student_new_details})
        }

    } 
}

let src_financial_vote = async (req,res,next) => {
    let id = req.params.id
    let src_financial = await candidate.src_financial.findById(id).exec()
    if(src_financial){
        let new_vote = src_financial.total_votes + 1;
        await candidate.src_financial.findByIdAndUpdate(id,{total_votes: new_vote}).exec()

        let data = {src_financial_vote: true}
        await student.student.updateOne({_id:req.user.userId},data).exec()

        let student_new_details = await student.student.findById(req.user.userId)
        if(student_new_details){
            res.json({res: "vote added", data: student_new_details})
        }
    } 
}

let src_general_vote = async (req,res,next) => {
    let id = req.params.id
    let src_general = await candidate.src_general.findById(id).exec()
    if(src_general){
        let new_vote = src_general.total_votes + 1;
        await candidate.src_general.findByIdAndUpdate(id,{total_votes: new_vote}).exec()

        let data = {src_general_vote: true}
        await student.student.updateOne({_id:req.user.userId},data).exec()

        let student_new_details = await student.student.findById(req.user.userId)
        if(student_new_details){
            res.json({res: "vote added", data: student_new_details})
        }
    } 
}

let nugs_president_vote = async (req,res,next) => {
    let id = req.params.id
    let nugs_president = await candidate.nugs_president.findById(id).exec()
    if(nugs_president){
        let new_vote = nugs_president.total_votes + 1;
        await candidate.nugs_president.findByIdAndUpdate(id,{total_votes: new_vote}).exec()

        let data = {nugs_president_vote: true}
        await student.student.updateOne({_id:req.user.userId},data).exec()

        let student_new_details = await student.student.findById(req.user.userId)
        if(student_new_details){
            res.json({res: "vote added",data: student_new_details})
        }
    } 
}

let nugs_financial_vote = async (req,res,next) => {
    let id = req.params.id
    let nugs_financial = await candidate.nugs_financial.findById(id).exec()
    if(nugs_financial){
        let new_vote = nugs_financial.total_votes + 1;
        await candidate.nugs_financial.findByIdAndUpdate(id,{total_votes: new_vote}).exec()

        let data = {nugs_financial_vote: true}
        await student.student.updateOne({_id:req.user.userId},data).exec()

        let student_new_details = await student.student.findById(req.user.userId)
        if(student_new_details){
            res.json({res: "vote added", data: student_new_details})
        }
    } 
}

let nugs_general_vote = async (req,res,next) => {
    let id = req.params.id
    let nugs_general = await candidate.nugs_general.findById(id).exec()
    if(nugs_general){
        let new_vote = nugs_general.total_votes + 1;
        await candidate.nugs_general.findByIdAndUpdate(id,{total_votes: new_vote}).exec()

        let data = {nugs_general_vote: true}
        await student.student.updateOne({_id:req.user.userId},data).exec()

        let student_new_details = await student.student.findById(req.user.userId)
        if(student_new_details){
            res.json({res: "vote added",data: student_new_details})
        }
    } 
}

module.exports = {
    src_financial_vote,
    src_general_vote,
    src_president_vote,
    nugs_financial_vote,
    nugs_general_vote,
    nugs_president_vote
}