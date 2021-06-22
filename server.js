const express=require('express')
const bodyParser = require('body-parser');
const cors=require('cors')
const Router=express.Router()
const app=express()



require('dotenv').config();
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With, Content-Type,Accept");
    next();
})  

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const UsersRouter=require('./routes/Users')


app.use('/users',UsersRouter)


//app.use(cors());

app.listen(8000,()=>{console.log("server connected")})

