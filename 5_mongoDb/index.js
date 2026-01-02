const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://qaisirnaseerDataBase:qaisirnaseerDataBase302@cluster01.iyz0raz.mongodb.net/test?retryWrites=true&w=majority").then(()=>{
    console.info("database connected")
}).catch((error)=>{
    console.error(error)
});
// const userSchema=new mongoose.Schema({
//     name:String,
//     age:Number,
//     email:String,
//     isActive:true,
//     tags:[String],
//     currDate:Date.now(),
// });
// const user=new mongoose.model("User",userSchema);
