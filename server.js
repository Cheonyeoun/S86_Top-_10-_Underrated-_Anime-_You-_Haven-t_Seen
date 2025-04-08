const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

app.get('/',(req,res) =>{
    return res.send("Hey There Welcome To The Server!")
});

app.get('/ping',(req,res) =>{
    return res.send("pong")
});


app.listen(PORT,()=>{

    console.log(`Server is Running on http://localhost:${PORT}`);
});