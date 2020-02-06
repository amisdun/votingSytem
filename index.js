const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
let jwt = require("jsonwebtoken");
require("dotenv").config()

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// seriving static files
app.use(express.static("client"));

// setting up the cross origin resource sharing
app.use(cors());


// requiring routers
let admin_sigin = require("./server/router/admin_signinRouter")
let admin_signup = require("./server/router/admin_signupRouter")
let student_signup = require("./server/router/student_signupRouter")
let student_signin = require("./server/router/student_signinRouter")
let candidate  = require("./server/router/candidateRouter")
let votes = require("./server/router/votingRouter")
let reset_system = require("./server/router/reset_systemRouter")
let fetch_student = require("./server/router/fetch_studentRouter")

// registering routers
app.use("/admin",admin_sigin)
app.use("/admin",admin_signup)
app.use("/student",student_signin)
app.use("/student",student_signup)
app.use("/candidate",candidate)
app.use("/votes",votes)
app.use("/reset",reset_system)
app.use("/student",fetch_student)

// specifing the development and production port
let port = process.env.PORT || 8000;

//serving the homepage to the client
app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname) + "/client/student_login.html")
})
app.get("/admin",(req,res) => {
    res.sendFile(path.join(__dirname) + "/client/admin_login.html")
})

// server port listening
app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});
module.exports = app;