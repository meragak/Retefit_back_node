const mongoose=require('mongoose')


mongoose.connect("mongodb://localhost/RetfitDB",{ useNewUrlParser: true,useUnifiedTopology: true })
const db=mongoose.connection

exports.db=db
