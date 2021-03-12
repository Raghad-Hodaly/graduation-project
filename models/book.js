const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    Title :{
        type :String ,
        required :true ,
        trim : true
    },
    category :{
        type : String ,
        required : true ,
        trim : true
    },
    Language:{
        type : String ,
        required:true ,
        trim : true
    },
    yearOfEdition :{
        type : Number ,
        required : true ,
        trim : true
    },
    owner:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref : 'Publisher'
    },
    owner:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref : 'Author'
    }
})

module.exports = mongoose.model('Book' , BookSchema)

//branch locally
//changes/commit 
//pr
