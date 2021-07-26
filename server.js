import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";
// import dotenv from 'dotenv';
// import auth from './env.js';

// App config

const app = express();
const connection_url = "mongodb+srv://admin:Y8WdG4ueHTPBSeeD@cluster0.8bb5a.mongodb.net/tinderDB?retryWrites=true&w=majority"

// Middlewares
app.use(express.json());
app.use(Cors());
// dotenv.config();

// DB config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // these parameters are added so that we don't get error in mongoose, as mongodb is developing continously
})

// API endpoints

app.get("/", function(req,res){
 res.status(200).send("Hello Piyush!");   
});

app.post("/tinder/cards",(req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) => {
        if(err){
            res.status(500).send(err);
            // here if internal server error then 500
        } else {
            res.status(201).send(data);
            // this is when we created our data succefully 
        }
    })
});

app.get("/tinder/cards",(req,res) => {
    Cards.find((err,data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// Listener

app.listen(process.env.PORT || 8001, function(){
    console.log("server is runnning!");
})
