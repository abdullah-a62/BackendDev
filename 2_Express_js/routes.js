const Express=require('express')
const app=Express()
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.send('Hello wellcome to home page')
})
app.get('/about',(req,res)=>{
    res.send("My Name i s Qaisir Naseer I am a full Stack web developer")
})
app.get('/contact',(req,res)=>{
    res.send('Contact us to get It services')
})
app.use((req,res,next)=>{
    res.status(404).send('Page not found')
    next();
})

const port=3000;
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
})