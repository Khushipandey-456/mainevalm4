const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( () => {
    try{
        name: {type:String}
    email:  {type:String, Unique}
    mobileNumber:  {type:String}
    password:  {type:String, hashed}
    role:{ Enum (admin, doctor, patient)}
    specialization:{ Enum (nerves, heart, lungs, skin)} 
    availableDays: [Enum (Sun, Mon, Tue, Wed, Thu, Fri, Sat) ]
    }catch(err){
        return resizeBy.status(500).json({msg:"Something went wrong"});
    }
    }) ;

    const userModel = mongoose.model("Usermodel", UserSchema);
    module.exports = userModel;

