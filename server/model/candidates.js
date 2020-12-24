const mongoose = require("mongoose")


let src_presidential_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
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
    passport_pic: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number,
        required: false
    }
})

let src_financial_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
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
    passport_pic: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number,
        required: false
    }
})

let src_general_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
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
    passport_pic: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number,
        required: false
    }
})

let local_nugs_presidential_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
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
    passport_pic: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number,
        required: false
    }
})

let nugs_financial_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
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
    passport_pic: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number,
        required: false
    }
})

let nugs_general_candidate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
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
    passport_pic: {
        type: String,
        required: true
    },
    total_votes: {
        type: Number,
        required: false 
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