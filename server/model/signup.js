const mongoose = require("mongoose")

let admin_signup = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        rquired: true
    }
})

let student_signup = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    index_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    src_president_vote: {
        type: Boolean,
        required: true
    },
    src_financial_vote: {
        type: Boolean,
        required: true
    },
    src_general_vote: {
        type: Boolean,
        required: true
    },
    nugs_general_vote: {
        type: Boolean,
        required: true
    },
    nugs_president_vote: {
        type: Boolean,
        required: true
    },
    nugs_financial_vote: {
        type: Boolean,
        required: true
    },
})

let admin = mongoose.model("admin",admin_signup)
let student = mongoose.model("student",student_signup)

module.exports = {
    admin,
    student
}