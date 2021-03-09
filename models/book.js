const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    Name :{
        type :String ,
        required :true ,
        trim : true
    },
    category :{
        type : String ,
        required : true ,
        trim : true
    },
    Author :{
        type : String ,
        required : true ,
        trim : true
    },
    owner:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref : 'Publisher'
    }
})

module.exports = mongoose.model('Book' , BookSchema)