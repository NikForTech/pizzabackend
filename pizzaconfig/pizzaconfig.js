const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
require('color')

const connectDb = async()=>{
    try{
        const url = `mongodb://localhost:27017/Pizza`;
        const conn = await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            UseCreateIndex:true,
            UseFindAndModify:true
        })
        console.log("Database connected with the pizza ".bgCyan)//bg stadn background
    }
    catch(error){
       console.log(`Error:${error.message}`.bgred)
    }
}
module.exports = connectDb;