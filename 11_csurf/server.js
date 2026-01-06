const express=require('express');
const cookieParser=require('cookie-parser');
const csrf=require('csurf')
const app=express();

app.use(express.json())
app.use(cookieParser());
const csrfProtection=csrf({cookie:true});
app.get('/register',csrfProtection,(req,res)=>{
    const csrfToken=req.csrfToken();
    res.status(200).json({
        success:true,
        message:'csrf token created',
        data:csrfToken
        
    })
});
app.post('/submit',csrfProtection,(req,res)=>{
    try{
        const {content,_csrf}=req.body;
        console.log(req.body);
        res.status(200).json({
            success:true,
            message:'data submitted succeddully',
            data:{content,_csrf}
        })
    }catch(e){
        res.status(403).json({
            success:false,
            message:'invalid token'
        })
    }
});
app.listen(3000,(req,res)=>{
    console.info(`server is live`)
})