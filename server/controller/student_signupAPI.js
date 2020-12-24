const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const student_signup = require("../model/signup")
const password_hash = require("password-hash")
require("../../index.js")

let signup = async (req,res,next) => {
    let index_number = (req.body.index_number).toUpperCase();
    try {
        let student = await student_signup.student.findOne({index_number:index_number}).exec()
        if(student) res.status(200).json({res: "exist", msg: "Student credentials already exist"})
        else {
            let hash = password_hash.generate(req.body.password);
            let new_student = await new student_signup.student({
                _id: new mongoose.Types.ObjectId,
                index_number: index_number,
                password: hash,
                email: req.body.email,
                phone_number: req.body.phone_number,
                program_name: req.body.program_name,
                src_president_vote: false,
                src_general_vote: false,
                src_financial_vote: false,
                nugs_financial_vote: false,
                nugs_president_vote: false,
                nugs_general_vote: false
            })
            new_student.save()
            res.status(201).json({res: "created",data: new_student})
        }
    } catch (error) {
        res.json({res: "error occured"})
    }
}

module.exports = signup