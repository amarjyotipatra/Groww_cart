const express = require("express");

const mongoose = require("mongoose");
// const stock=require("../db.json")

const app = express();

app.use(express.json());

app.use(express.urlencoded())

app.set("view engine","ejs")

const connect=require("./configs/connection")
const cartController=require("./controllers/cart.controller");

app.use("/cart",cartController)
   
 
app.listen(4108,async ()=>{
    await connect();
    console.log("Listening on port 4108");
});

