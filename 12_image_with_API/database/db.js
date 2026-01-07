const mongoose=require('mongoose');
const connectDb=async()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/studentdb');
        console.info('database connected')
    } catch (error) {
        console.error(`failed to connect with db`)
    }
}
module.exports=connectDb