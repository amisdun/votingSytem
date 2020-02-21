const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const student_signup = require("../model/signup")
const password_hash = require("password-hash")
require("../../index.js")

let fetch_all_student = async (req,res,next) => {
    try {
        let registered_student = await student_signup.student.find({}).exec()
        if(registered_student.length >= 1){res.json({res:"found", data: registered_student})}
        else{res.json({res:"No Data"})}
    } catch (error) {
        console.log(error)
    }
}

//API to fetch one student
let fetch_one_student = async (req,res,next) => {
    try {
        let student = await student_signup.student.findById(req.params.id).exec()
        if(student){
            res.json({res: "found",data: student})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    fetch_all_student,
    fetch_one_student
}