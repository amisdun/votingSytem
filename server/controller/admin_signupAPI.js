const mongoose = require("mongoose")
const db = require("../db_connection/mongodb");
mongoose.Promise = global.Promise
const signup = require("../model/signup")
const password_hash = require("password-hash")
require("../../index.js")

let admin_signup = async (req,res,next) => {
    let username = req.body.username
    try {
        let admin = await signup.admin.findOne({username:username}).exec()
        if(admin) res.status(200).json({res: "exist"})
        else{
            let hash = password_hash.generate(req.body.password)
            await new signup.admin({
                _id: new mongoose.Types.ObjectId,
                username: username,
                email: req.body.email,
                password: hash
            }).save()
            res.status(201).json({res: "created"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({res: "Error occured"})
    }
}

module.exports = admin_signup