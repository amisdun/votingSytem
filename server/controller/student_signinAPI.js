const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const signin = require("../model/signup")
const password_hash = require("password-hash")
const jwt = require("jsonwebtoken")
const totp = require("otplib");
const { request } = require("../..");
const accout_sid = "AC5cc6a663477c5bed78e847c244098602"
const account_token = "29b70489027ffd873b64d7822cfd4cec"
const client = require('twilio')(accout_sid, account_token)
require("../../index.js")

let student_singin = async (req,res,next) => {
    let index_number = req.body.index_number
    let phone_number = req.body.phone_number
    try {
        let student = await signin.student.findOne({index_number: index_number}).exec()
        if(student){
            let payload = {username: student.index_number,userId: student._id}
            let pass_verify = await password_hash.verify(req.body.password,student.password)
            if(pass_verify === true){
                let token = await jwt.sign(payload,"dbkdbkqrjgrvgcwtkrnhrigukbqk",{expiresIn: "24h"})
                const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'
                let generate_otp = totp.totp.generate(secret)

                let message = await client.messages.create({
                    body: `This is your token ${generate_otp}`,
                    from: '+16592072063',
                    to: phone_numbr
                })

                if(message) res.json({res: "Auth success",token: token, student: student, otp_res: "An otp has been sent to you"})
            }
            else{
                res.json({res: "Auth Failed",msg: "invalid credentials"})
            }
        }
        else{
            res.json({res: "signin failed",msg: "invalid credentials"})
        } 
    } catch (error) {
        res.status(500).json({res: "An error occured"})
    }
}

const otp_verify = async (req,res) => {
    try{

        otp_number = req.body.otp_number

        const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'
        
        const isValid = totp.totp.check(otp_number, secret)

        if(isValid){
            
            return res.status(200).json({res: "success"})
        } else {
            return res.status(402).json({res: "error", message: "invalid otp number"})
        }

    } catch(error){

        res.status(500).json({error: "An error has accoured"})
    }
}

module.exports = {
    student_singin: student_singin,
    otp_verify: otp_verify
}