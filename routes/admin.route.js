const express = require ("express");
const app = express();
app.use(express.json());
const adminRouter = require("../models/apponintment.model");

app.get("/admin/users", async ()=>{
    try{
        let data = await redis.get(json.parse(req.body));
        console.log(data);
    }catch(err){
        return res.status(500).json({msg:"Somethinng went wrong"});
    }
});
app.get("/admin/users/id", async ()=>{
    try{
        let data = await redis.get(json.parse(req.body(id)));
        console.log(data);
    }catch(err){
        return res.status(500).json({msg:"Somethinng went wrong"});
    }
});
app.delete("/admin/users/id", async ()=>{
    try{
        let data = await redis.get(json.parse(req.body(id)));
        res.status(400).json(data.remove);
        return "Removed User Successsfully";
    }catch(err){
        return res.status(500).json({msg:"Somethinng went wrong"});
    }
});



module.exports = adminRouter