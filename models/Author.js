const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
    Name :{
        type : String ,
        required :true ,
        trim : true
    },
    Description :{
        type : String ,
        required :true ,
        trim : true
    }
})


module.exports = mongoose.model('Author' , AuthorSchema)

