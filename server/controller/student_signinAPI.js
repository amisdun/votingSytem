const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const signin = require("../model/signup")
const password_hash = require("password-hash")
const jwt = require("jsonwebtoken")
const totp = require("otpauth");
const { request } = require("../..");
const accout_sid = "AC5cc6a663477c5bed78e847c244098602"
const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'
const account_token = "29b70489027ffd873b64d7822cfd4cec"
const client = require('twilio')(accout_sid, account_token)
require("../../index.js")

let student_singin = async (req,res,next) => {
    let index_number = req.body.index_number
    try {
        let student = await signin.student.findOne({index_number: index_number}).exec()
        if(student){
            let payload = {username: student.index_number,userId: student._id}
            let pass_verify = await password_hash.verify(req.body.password,student.password)
            if(pass_verify === true){
                let token = await jwt.sign(payload,"dbkdbkqrjgrvgcwtkrnhrigukbqk",{expiresIn: "24h"})
                
                let new_totp = new totp.TOTP({
                    issuer: 'ACME',
                    label: 'AzureDiamond',
                    algorithm: 'SHA1',
                    digits: 6,
                    period: 30,
                    secret: secret
                })

                let generate_otp = new_totp.generate();

                let message = await client.messages.create({
                    body: `This is your token ${generate_otp}`,
                    from: '+16592072063',
                    to: "+"+student.phone_number
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
        console.log(error)
        res.status(500).json({res: "An error occured"})
    }
}

const otp_verify = async (req,res) => {
    try{

       let otp_number = req.body.otp_number

       console.log(otp_number)

       let new_totp = new totp.TOTP({
        issuer: 'ACME',
        label: 'AzureDiamond',
        algorithm: 'SHA1',
        digits: 6,
        period: 30,
        secret: secret
    })
        
        const isValid = new_totp.validate({
            token: otp_number,
            window: 1
        })
        console.log(isValid)

        if(isValid == -1){
            
            return res.status(200).json({res: "success", msg: "Successful"})
        } 
        if (isValid == null){
            return res.status(402).json({res: "error", msg: "Invalid otp"})
        }

    } catch(error){
        console.log(error)
        res.status(500).json({error: "An error has accoured"})
    }
}

module.exports = {
    student_singin: student_singin,
    otp_verify: otp_verify
}