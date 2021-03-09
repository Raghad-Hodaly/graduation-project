const mongoose = require('mongoose')

const PublisherSchema = mongoose.Schema({
    Name :{
        type:String ,
        required : true ,
        trim : true
    },
    Email : {
        type : String,
        unique : true ,
        required : true ,
        trim : true ,
        lowercase : true
    },
    mobileNumber :{
        type : String,
        required :true,
        trim:true,
        minlength : 10,
        maxlength : 10
    },
    Password :{
        type : String,
        required : true ,
        minlength : 7 ,
        trim : true 
    },
    Gender :{
        type : String,
        required:true,
        trim:true
    },
    Country :{
        type : String,
        required:true,
        trim:true
    },
})

module.exports = mongoose.model('Publisher' , PublisherSchema)