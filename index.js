const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const cors =  require("cors")

// configuring the express app

let app = express()

// port
let port = 4000 || process.env.PORT;

// using the configured app

// setting up cors
app.use(cors())

// setting up bodyParser

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)

//serving static files

// app.use(express.static(""))

// requiring routers
let admin_sigin = require("./server/router/admin_signinRouter")
let admin_signup = require("./server/router/admin_signupRouter")
let student_signup = require("./server/router/student_signupRouter")
let student_signin = require("./server/router/student_signinRouter")

// registering routers
app.use("/admin",admin_sigin)
app.use("/admin",admin_signup)
app.use("/student",student_signin)
app.use("/student",student_signup)

app.get("/", (req,res,next) => {
    res.json({
        res: "welcome to my voting system"
    })
    // res.sendFile(path.join(__dirname + ""))
})

app.listen(port,() => {
    console.log(`server listening to port ${port}`)
})

module.exports = app;