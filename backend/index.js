const express = require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/configDB')
const app = express();
dotenv.config();



const PORT = 3000;

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
    connectDB()
})

/* 



*/
