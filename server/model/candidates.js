const mongoose = require("mongoose")


let src_presidential_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    index_number: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number
    }
})

let src_financial_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    index_number: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number
    }
})

let src_general_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    index_number: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number
    }
})

let local_nugs_presidential_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    index_number: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number
    }
})

let nugs_financial_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    index_number: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number
    }
})

let nugs_general_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    index_number: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number
    }
})



let src_president = mongoose.model("src_president",src_presidential_candidate)
let src_financial = mongoose.model("src_financial",src_financial_candidate)
let src_general = mongoose.model("src_general",src_general_candidate)
let nugs_president = mongoose.model("nugs_president",local_nugs_presidential_candidate)
let nugs_financial = mongoose.model("nugs_financial",nugs_financial_candidate)
let nugs_general = mongoose.model("nugs_general",nugs_general_candidate)

module.exports = {
    src_president,
    src_financial,
    src_general,
    nugs_president,
    nugs_financial,
    nugs_general
}