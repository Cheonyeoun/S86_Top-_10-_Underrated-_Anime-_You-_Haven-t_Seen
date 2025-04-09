const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Anime = require('./models/Anime');
const app = express();

app.use(express.json());
const animeRoutes = require('./routes/animeRoutes');
app.use('/anime', animeRoutes);

const PORT = 3000;


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("✔️ mongoDB connection successful!")
})
.catch((err)=> console.error("❌ Connection Failed",err))

app.get('/', (req, res) => {
    const isConnected = mongoose.connection.readyState === 1;
    res.send(`Database is ${isConnected ? 'Connected' : 'Not Connected'}`);
  });
app.get('/ping',(req,res) =>{
    return res.send("pong")
});


app.listen(PORT,()=>{

    console.log(`Server is Running on http://localhost:${PORT}`);
});