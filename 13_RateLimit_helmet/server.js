const express=require('express');
const app=express();
const ratelimit=require('express-rate-limit');
const helmet=require('helmet');
const limiter=ratelimit({
    windowMs:1000*10,
    limit:4,
    message:"too many requests from this ip, please try later!!"
})
app.use(helmet());
app.use(limiter);
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:'wellcome to home'
    })
});
app.get('/crash',(req,res)=>{
    res.status(200).json({
        success:true,
        message:'trying to crash using too many requests'
    })
})
app.listen(3000,()=>{
    console.info('server : http://localhost:3000')
})