const express=require('express')
const app=express();
const addImage=require('./imageUpload');
app.use(express.json());
app.post('/uploadImage',addImage);
app.listen(3000,()=>{
    console.info(`http://localhost:3000`)
})