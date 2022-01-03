require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./users/user.router");
const farmerRouter= require("./users/user.router");
const dealerRouter=require("./users/user.router");
app.use(express.json());



app.use("/api/users", userRouter);
app.use("/api/farmer",farmerRouter);
app.use("/api/dealer",dealerRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on PORT :",process.env.APP_PORT);
});