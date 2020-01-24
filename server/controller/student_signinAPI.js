const mongoose = require("mongoose")
const signin = require("../model/signup")
const password_hash = require("password-hash")
const jwt = require("jsonwebtoken")
require("../../index")

let student_singin = async (req,res,next) => {
    let index_number = req.body.index_number
    try {
        let student = await signin.student.findOne({index_number: index_number}).exec()
        if(student){
            let payload = {username: student.index_number,userId: student._id}
            let pass_verify = await password_hash.verify(req.body.password,student.password)
            if(pass_verify === true){
                let token = await jwt.sign(payload,"dunamisamisdun",{expiresIn: "24"})
                res.json({res: "Auth success",token: token})
            }
            else{
                res.json({res: "Auth Failed"})
            }
        }
        else{
            res.json({res: "signin failed",msg: "invalid credentials"})
        } 
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

module.exports = student_singin;