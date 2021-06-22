const dbModule = require('../config/dBModule')
const myCollectionName = "User"
const interventionsCollection = "Interventions"
const User=require('../models/User')
var ObjectId = require('mongodb').ObjectID;
const leboncoin=require('leboncoin-api');
const jwt=require('jsonwebtoken');




////Add User
async function addUser(req, res) {

    if (req.body.email != null) {


        if (await dbModule.db.collection(myCollectionName).findOne({ name: req.body.name })) {

            res.send(req.body.name + " market already exists")
            return;
        }
        const newUser= {
            email: req.body.name,
            password: req.body.password,
            image: req.body.image,
            rating: req.body.rating,
            
        }
        console.log("passed");
        if (req.body.lat === null || req.body.lat === null) {
            newMarket.lat = 0;
            newMarket.lon = 0;
        }

        try {
            await dbModule.db.collection(myCollectionName).insertOne(newMarket)
            res.json(newMarket)
        }
        catch {
            res.send('error')
        }
    }

}
///////Delete User
async function deleteUser(req, res) {
    if (req.body.email != null) {
        await dbModule.db.collection(myCollectionName).deleteOne(req.body.email).then(result => {

            res.send(result);
            console.log(result);
        }).catch((err) => {

            console.log(err);
        });

    }  //res.json(markets)
}

async function updateUser(req, res) {
    if (req.body.email != null) {
        console.log(req.body);
        await dbModule.db.collection(myCollectionName).findOneAndUpdate({email:req.body.email},{$set:req.body},{new:true,upsert:true}).then(result => {

            res.send(result);
            console.log(result);
        }).catch((err) => {

            console.log(err);
        });

    }  //res.json(markets)
}



async function login(req, res) {

    if (req.body.email != null) {
    
        await dbModule.db.collection("User").findOne({ email: req.body.email }).then(result => {
            /*jwt.sign(result,process.env.SECRET_KEY,{expiresIn:"30s"},(err,token)=>{
            res.json({token});
            })*/
            
            if(result.password==req.body.password){
                
                res.send(result);
                res.sendStatus(200);
                
            }
            else{
                 res.sendStatus(403);
                 console.log("wrong password");
            }
                

        }).catch((err) => {
            
            res.sendStatus(403);
            
        });

  
    return;       
    }

}

/////// Récupérer les intervention(Get)
async function interventions(req, res) {
    
    const markets = await dbModule.db.collection(interventionsCollection).find({}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {

            res.send(JSON.stringify(result));
        }
    })
           
}

async function getUsers(req, res) {
    
    const markets = await dbModule.db.collection(myCollectionName).find({entreprise:req.params.entreprise}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {

            res.send(JSON.stringify(result));
        }
        //res.json(markets)
    })
           
}


exports.addUser = addUser
exports.deleteUser = deleteUser
exports.updateUser = updateUser
exports.login=login
exports.getUsers=getUsers
exports.interventions=interventions
