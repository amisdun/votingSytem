const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const signin = require("../model/signup")
const password_hash = require("password-hash")
const jwt = require("jsonwebtoken")
require("../../index.js")
require("dotenv").config();

let admin_singin = async (req,res,next) => {
    let username = req.body.username
    try {
        let admin = await signin.admin.findOne({username: username}).exec()
        if(admin){
            let payload = {username: admin.username,userId: admin._id}
            let pass_verify = password_hash.verify(req.body.password, admin.password)
            if(pass_verify === true){
                let token = jwt.sign(payload,"kjbdcirbkrbkiurkjjkbkldblkkbjkbkjhbjd", { expiresIn: "24h" })
                res.json({res: "Auth success",token: token})
            }
            else{
                res.json({res: "Auth Failed",msg: "wrong username or password"})
            }
        }
        else{
            res.json({res: "not found",msg: "wrong username or password"})
        } 
    } catch (error) {
        res.status(500).json({res: "An error occured"})
        console.log(error)
    }
}

module.exports = admin_singin;