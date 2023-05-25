const mongoose =require('mongoose')
require('color')
const Pizza = require('./pizzamodel/pizzamodel')
const pizzadata = require('./pizzadata/Pizzavariety')
const connectDb= require('./pizzaconfig/pizzaconfig')



const importData = async()=>{
   console.log("this is starting");
    try{/// we can use then as well but we use try cathc because we are familiar with it
        await connectDb();
        console.log("db connect");
        await Pizza.deleteMany({});
        const sampledata = pizzadata.map((pizza)=>{
        return {...pizza};
       });
       await Pizza.insertMany(sampledata);
       console.log("data imported")
       process.exit();

    }
    catch(error){
        console.log(`${error}`)
        process.exit(1)
    }
}

const datadestroy =()=>{

}

if(process.argv[2]==='-d'){
    datadestroy()
}else{
    importData()
}

