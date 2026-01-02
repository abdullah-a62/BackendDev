const express=require('express');
const app=express();
const port=3000;
app.use(express.json());
let books=[{id:1,title:"book 1"},{id:2,title:'book 2'},{id:3,title:'book 3'}];
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Wellcome to Book Store Api"
    })
});
app.get('/books',(req,res)=>{
    res.status(200).json({
        message:"All books",
        data:books
    })
});
app.get('/books/:id',(req,res)=>{
    let singleBook=books.find((book) => book.id === parseInt(req.params.id));
    if(singleBook){
        res.status(200).json({
            message:'book found',
            data:singleBook
        })
    }else{
        res.status(404).json({
            data:singleBook,
            message:'Book Not found'
            
        })
    }
})
app.post("/add",(req,res)=>{
    let newBook={
        id:books.length+1,
        title : `book ${books.length+1}`
    };
    books.push(newBook);
    res.status(200).json({
        data:newBook,
        message:'new book added'
    
   })   
});

app.put('/update/:id',(req,res)=>{
    const currentBook=books.find((book)=> book.id==parseInt(req.params.id));
    if(currentBook){
        currentBook.title=req.body.title || currentBook.title;
        res.status(200).json({
            message:"Book updated successfully",
            data:currentBook
        })
    }else{
        res.status(404).json({
            message:"book not found"
        })
    };
    
});
app.delete('/delete/:id',(req,res)=>{
    const deleteBook=books.find((book)=> book.id==parseInt(req.params.id));
    if(deleteBook != -1){
        const deletedBook=books.splice(deleteBook,1);
        res.status(200).json({
            message:"book deleted successfully",
            data:deleteBook[0]
        })
    }else{
        res.status(404).json({
            message:"book not found"
        })
    }
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})