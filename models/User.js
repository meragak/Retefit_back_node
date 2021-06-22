const mongoose=require('mongoose')


const UserSchema=mongoose.Schema({

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    entreprise:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true,
        
    },
    role:{
        type:String,
        require:true
    },
    lat:{
        type:Number,
        require:false
    },
    lng:{
        type:Number,
        require:false
    }
})

module.exports=mongoose.model('User',UserSchema)