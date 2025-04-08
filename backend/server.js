const { config } = require('dotenv');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());


const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    return res.send({Message:
        "Hey There Welcome To The Server!"
    })
})


app.listen(PORT,()=>{

    console.log(`Server is Running on http://localhost:${PORT}`);
}) 