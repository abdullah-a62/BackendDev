import mongoose from "mongoose";
const UserSchema=await mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    age:{
        type:Number,
        require:true,
    }
})
export default mongoose.model('User',UserSchema);