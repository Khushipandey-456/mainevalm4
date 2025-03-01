const express = require("express");
const connectedToDB = require("./config/mongoDb");
const userRouter = require("./routes/Authentication.route")
const app = express();
app.use(express.json());
app.use(userRouter,"userRouter");

app.get("/auth",()=>{
    console.log("This is Authentication route.....")

});
app.get("/admin",()=>{
    console.log("This is Admin route.....")

});
app.get("/doctors",()=>{
    console.log("This is doctors route.....")

});
app.get("/patient",()=>{
    console.log("This is patient route.....")

});


PORT = process.env.PORT

app.listen(PORT , () =>{
   connectedToDB();
    console.log("Server Started");
});