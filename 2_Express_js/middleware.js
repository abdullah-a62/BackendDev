const express=require('express')
const app=express()
const port=3000;
app.use((req,res,next)=>{
    console.log(`You are passing a middleware`);
    next();
})

app.get('/',(req,res)=>{
    res.send('Home Page');
})
app.use((req,res,next)=>{
    console.log('You are passing a middleware after home ');
    next();
})
app.get('/about',(req,res)=>{
    res.send('About page')
})
app.use((req,res,next)=>{
    res.status(404).send('Page not found');
    next();
})

app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
})