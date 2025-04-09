const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());

const PORT = 3000;


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("✔️ mongoDB connection successful!")
})
.catch((err)=> console.error("❌ Connection Failed",err))

app.get('/',(req,res) =>{
    return res.send("Hey There Welcome To The Server!")
});

app.get('/ping',(req,res) =>{
    return res.send("pong")
});


app.listen(PORT,()=>{

    console.log(`Server is Running on http://localhost:${PORT}`);
});