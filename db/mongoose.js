const mongoose = require('mongoose')

//connected to db
mongoose.connect('mongodb://127.0.0.1:27017/online-library' ,{
    useNewUrlParser :true ,
    useCreateIndex : true,
    useUnifiedTopology: true
} ,(err) =>{
    if(err){
        console.log(err)
    }
    console.log('connected to DB')
})