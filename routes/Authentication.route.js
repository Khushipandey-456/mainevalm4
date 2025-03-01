const express = require ("express");
const app = express();
app.use(express.json());
const userModel =require("../models/user.model");

app.post("/auth/register",async ()=>{
    try{
        let email = req.body;
        let name = res.body;
        let data = await req.body(email,password);
    if(data){
     let decoded = redis.set({email:email, name:name});
     res.status(400).json({msg:"Registered successfully"});
    }else{
        res.status(403).json({msg:"Already registered Please login"});
    }
    } catch(err){
        res.status(500).json({msg:"Somthing went wrong"});
    }

});
app.post("/auth/login",async ()=>{
    try{
        let email = req.body;
        let name = res.body;
        let data = await req.body(email,password);
    if(data){
     let decoded = req.body({email: email , name : name});
     res.status(400).json({msg:"Login successfully"})
    }else{
        res.status(403).json({msg:"Please login again"})
    }
    } catch(err){
        res.status(500).json({msg:"Somthing went wrong"});
    }

});

module.exports = userModel;
