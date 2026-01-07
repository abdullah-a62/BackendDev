const mongoose=require('mongoose');
const StudentData=new mongoose.Schema({
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
        trim:true,
        lowercase:true
    },
    city:{
        type:String,
        require:true,
       
    },
    gender:{
        type:String,
        require:true,
        enum:['male','female','other']
    },
    age:{
        type:Number,
        require:true,
        min:16,
        max:30

    },
    profile_pic:{
        type:String,
        unique:true,
    },
})

module.exports=new mongoose.model('Student',StudentData);