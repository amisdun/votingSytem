const mongoose = require("mongoose")
const student_signup = require("../model/signup")
const password_hash = require("password-hash")
require("../../index")

let signup = async (req,res,next) => {
    let index_number = req.body.index_number;
    try {
        let student = await student_signup.student.findOne({index_number:index_number}).exec()
        if(student) res.status(200).json({res: "exist", msg: "Student credentials already exist"})
        else {
            let hash = password_hash.generate(req.body.password);
            await new student_signup.student({
                _id: mongoose.Types.ObjectId,
                index_number: index_number,
                password: hash,
                email: req.body.email,
                src_president_vote: false,
                src_general_vote: false,
                src_financial_vote: false,
                nugs_financial_vote: false,
                nugs_president_vote: false,
                nugs_general_vote: false
            }).save()
            res.status(201).json({res: "created"})
        }
    } catch (error) {
        res.json({res: "error occured"})
    }
}

module.exports = signup