const express=require('express');
const app=express();
const passport=require('passport');
const session=require('express-session');
require('./oauth/google');

app.use(session({
    secret:'KEY123',
    resave:false,
    saveUninitialized:true
}))
app.use(passport.initialize());
app.use(passport.session());
app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">Login with google<a>')
});
app.use('/auth/google',
    passport.authenticate('google',{scope:['profile','email']})
);
app.use('/auth/google/callback',
    passport.authenticate('google',{
        failureRedirect:'/',
        successRedirect:'/profile'
    })
);
app.use('/profile',(req,res)=>{
    if(!req.authenticated()) res.redirect('/');
    res.send(`<h1>Wellcome to Home <h1>
            <h4>wellcome user ${req.user.displayName}  
        <a href="/logout">logout<a>`)
})
app.use('/logout',(req,res)=>{
    req.logOut(()=>{
        res.redirect('/');
    })
})
app.listen(3000,()=>{
    console.log(`server : http://localhost:3000`);
})
