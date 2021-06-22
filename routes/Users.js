const express=require('express')
const { verify, JsonWebTokenError } = require('jsonwebtoken')
const db=require('../config/dBModule')
//const Market=require('../models/Market')
const jwt=require('jsonwebtoken')
const router=express.Router()
const marketController=require('../controller/UserController')
const auth=require('../config/auth')
///////////Get ALl Markets Route
router.get("/",async function(req,res){
    const getM=marketController.getAllMarkets(res)
    /*auth.verifyToken,
    jwt.verify(req.token,'sa6',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
    console.log(getM);
        }*/
    })
    




/////////REgister a user
router.post("/Register",async (req,res)=>{
await marketController.addUser(req,res)
})
////////User Login/////////////
router.post("/login",async (req,res)=>{
    await marketController.login(req,res)
    })

///////récupérer la list de mes collegues
router.get("/:entreprise/mycollegues",async (req,res)=>{
            await marketController.getUsers(req,res)
            })
/////////Mettre à jour  le Users
router.put("/update",async (req,res)=>{
    await marketController.updateUser(req,res)
    })
router.delete("/delete",async (req,res)=>{
    await marketController.deleteUser(req.params,res)
    })

///////////Récupérer la liste des interventions

router.get("/interventions",async (req,res)=>{
    await marketController.interventions(req,res)
})
module.exports=router