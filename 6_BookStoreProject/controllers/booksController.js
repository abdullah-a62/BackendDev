const express=require('express');
const Books=require('../model/books_schema')

const getAllBooks=async(req,res)=>{
    const allBooks=await Books.find({});
    if(allBooks){
        res.status(200).json({
            messsage:'All books found',
            data:allBooks
        })
    }else{
        res.json({
            message:"no book present"
        })
    }
};
const getsingleBook=async(req,res)=>{
    const singleBook=await Books.findById(req.params.title);
    if(!singleBook){
        res.status(404).json({
            message:'book not found',
        })
    }else{
        res.status(200).json({
            message:`book found : ${req.params.title}`,
            data:singleBook
        })
    }


};
const addBook=async(req,res)=>{
   try{
    const newBook=req.body;
    const newlyCreatedBook=await Books.create(newBook);
    if(newlyCreatedBook){
        res.status(200).json({
            message:'new Book added',
            data:newBook
        })
    }
   }catch(err){
        console.error(`error adding a book ${error}`)
   }
};
const updateBookById=async(req,res)=>{
    const updatedId=req.params.title;
    const updateData=req.body;
    const updatedBook=await Books.findByIdAndUpdate(updatedId,updateData,{new:true})
    if(updatedBook){
        res.status(200).json({
            message:'book updated',
            data:updatedBook
        })
    }else{
        res.status(404).json({
            message:'book not found'
        })
    }
}
const deleteBookByID=async(req,res)=>{
    const deleteId=req.params.title;
    const deletedBook=await Books.findByIdAndDelete(deleteId);
    if(deletedBook){
        res.status(200).json({
            message:'book deleted successfully',
            data:`deleted Book : ${deletedBook}`
        })
    }

}
module.exports={getAllBooks,getsingleBook,addBook,updateBookById,deleteBookByID}
