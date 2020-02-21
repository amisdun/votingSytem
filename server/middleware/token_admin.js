const jwt = require("jsonwebtoken");
require("../../index.js")

var authenticate = (req,res,next) =>{
    jwt.verify(req.body.token,"kjbdcirbkrbkiurkjjkbkldblkkbjkbkjhbjd",(err,decode)=>{
        if(err){
            res.json({
                message: "an error has occured",
                error: err
            })
        }
        req.user = decode;
        next();
    })
    
}

module.exports = authenticate;