const mongoose = require('mongoose');


const pizzSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    varients:[],
    sauce:[],
    cheese:[],
    veggies:[],//these all are in array
    category:{
        type:String,
        required:true
    },
    image:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    }

    
},{timestamps:true});

const pizzamodel = mongoose.model('Pizza',pizzSchema)
module.exports=pizzamodel;