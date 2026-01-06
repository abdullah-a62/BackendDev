const express=require('express')
const cookieParser=require('cookie-parser')
const app=express();
app.use(cookieParser());
app.use(express.json());
app.get('/create-cookie',(req,res)=>{
    try {
        res.cookie('username','qaisir123',{
            maxAge:8460000,
            httpOnly:true
        })
        res.status(200).json({
            success:true,
            message:'cookie created successfully',
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:'server error! unable to create a cookie',
            error:err
        })
    }
});
app.get('/read-cookie',(req,res)=>{
        const user=req.cookies.username;
        if(user){
            res.status(200).json({
            success:true,
            messge:'cookie read successfully',
            data:user
        })
        }else{
        res.status(500).json({
            success:false,
            message:'unable to read cookie due to server error'
        })
    }
});
app.get('/delete-cookie',(req,res)=>{
   
    const deleteCookie=res.clearCookie('username');

    if(deleteCookie){
        res.status(200).json({
            success:true,
            message:'cookie deleted successfully'
        })
    }else{
        res.status(500).json({
            success:false,
            message:'no cookie found'
        })
    }
});
app.listen(3000,()=>{
    console.info(`server : http://localhost:3000`)
})