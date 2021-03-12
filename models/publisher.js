const mongoose = require('mongoose')

const PublisherSchema = mongoose.Schema({
    mobileNumber :{
        type : String,
        required :true,
        trim:true
    },
    OfficeName :{
        type : String,
        required :true,
        trim:true
    }
})

module.exports = mongoose.model('Publisher', PublisherSchema)

