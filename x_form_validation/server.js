const express=require('express')
const {body,validationResult}=require('express-validator');
const app=express();
app.use(express.json());
var validationrules=[
    body('username').notEmpty().withMessage('username cannot be empty')
    .isAlpha().withMessage('username contain only characters')
    .trim()
    .isLength({min:10,max:30}).withMessage('must contain characters n between 10 and 30')
    .escape(),

    body('email').isEmail().withMessage('use a valid email')
    .normalizeEmail(),
    body('password')
    .isAlphanumeric().withMessage('can contain number s and characters')
    .isLength({min:8,max:16})
]
app.post('/adduser',validationrules,(req,res)=>{
    const result=validationResult(req);
    res.status(200).json({
        message:"done",
        data:result
    })

});
app.listen(3000,()=>{
    console.log(`server is listening at http://localhost:3000`);
})