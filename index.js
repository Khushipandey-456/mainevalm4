const express = require("express");
const connectedToDB = require("./config/mongoDb");
const userRouter = require("./routes/Authentication.route")
const app = express();
var cron = require('node-cron');
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

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

PORT = process.env.PORT

app.listen(PORT , () =>{
   connectedToDB();
    console.log("Server Started");
});