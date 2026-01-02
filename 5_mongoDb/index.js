const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mongoBasics').then(()=>{
    console.log('database connected');
}).catch((e)=>{
    console.log(e);
})
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    city:String,
    tags:[String],
    currDate:{type:Date,default:Date.now}
})
const User=mongoose.model("User",userSchema);
// create user
async function runQueries() {
    try{
     const newUser=await User.create({
        name:'ali2',
        email:'example23@.comc',
        age:22,
        city:'multan',
        tags:['dev','ops'],
     })
    console.log('new user created',newUser);
    const allusers=await User.find({});
    const specificUser=await User.find({age:22})
    const findFirstOne=await User.findOne({city:'Multan'});
    // console.log(findById);
    // console.log(allusers)
    const deleteduser=await User.findByIdAndDelete(newUser._id);
    // console.log(deleteduser)
    const updateuser=await User.findByIdAndUpdate(newUser._id,{
        $set : {name:'abdullah'},$push:{tags:'updated'}
    },{new:true});
    // console.log(`updated user ${updateuser}`)
    }catch(e){
        console.log(`error ${e}`)
    }
}
runQueries();