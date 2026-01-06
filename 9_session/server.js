const express=require('express');
const session=require('express-session');
const MongoStore=require('connect-mongo')

const app=express();
const Store=MongoStore.create({
    mongoUrl:'mongodb://localhost:27017/sessionDb'
})
app.use(express.json()); 
app.use(session({
    secret:'password',
    resave:false,
    saveUninitialized:false,
    store:Store,
    cookie:{maxAge:1000*24*24}    
}))
app.get('/home',(req,res)=>{
    res.status(200).json({
        success:true,
        message:'Wellcome to home page'
    })
});
app.post('/login',(req,res)=>{
    const {username , password}=req.body;
    console.log(req.body);
    try{
        req.session.UserName=username;
        res.status(200).json({
            success:'session created',
            data:`user data ${username+" "+ password}`,
            message:`session created with username : ${req.session.UserName}`
        
    })}catch(err){
        console.error(`failed to cretae session : ${err}`)
    }
});
app.get('/user',(req,res)=>{
    const user=req.session.UserName;
        if(user){
            res.status(200).json({
            success:true,
            message:'session read successfully',
            data:user
        })}else {
            res.status(400).json({
            success:false,
            message:'failed to read session',
        })

    }
});
app.get('/logout',(req,res)=>{
    try {
        req.session.destroy();
        res.status(200).json({
            success:true,
            message:'session destroyed successfully'
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to delete the session',
            error:error
        })
    }
})
app.listen(3000,()=>{
    console.info(`server  : http://localhost:3000`)
})