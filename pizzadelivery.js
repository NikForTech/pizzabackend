const express = require('express');
const cors = require('cors');
const connectDb = require('./pizzaconfig/pizzaconfig')



connectDb();
const app = express();
app.use(cors());
app.use(express.json());

app.get('',async(req,res)=>{
    res.send("<h1>this is from the backend after the server connection</h1>")
})

app.listen(5000,()=>console.log("sever connected"))