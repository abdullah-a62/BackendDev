const mongoose=require('mongoose');
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required :[true,'book title is required'],
        trim:true,
        maxlength:[100,'maximum 100 characters']
    },
    author:{
        type:String,
        required :[true,'book author name is required'],
        trim:true,
        maxlength:[100,'maximum 100 characters']
    },
    year:{
        type:Number,
        required:[true,'Year of publish is required'],
        default:new Date().getFullYear(),
        min:[1000,'publication year cannot be less than 1000'],
        max:[new Date().getFullYear(),'cannot be a future date']
    },
    pages:{
        type:Number,
        required:[true,'number of book pages are required'],
        max:5000,
        min:100
    }
})
module.exports=mongoose.model('books',bookSchema)