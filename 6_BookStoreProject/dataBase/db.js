const mongoose=require('mongoose')
const connectToDataBase=async ()=>{
    try {
       await  mongoose.connect('mongodb://localhost:27017//bookStore');
        console.log(`database connected`);
    } catch (error) {
        console.error(`database connection failed`,error);
        process.exit(1);
    }
}
module.exports=connectToDataBase;