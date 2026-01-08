const express=require('express');
const app=express();
const nodeMailer=require('nodemailer');
// const {MailtrapTransport}=require('mailtrap')
// const transporter=nodeMailer.createTransport(
//     MailtrapTransport({
//         token:"use your own"
//     })
// )
const transporter=nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'example@gmail.com',
        pass:'password'
    }
})
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send('<h1>wellcome to home page</h1>')
});
app.post('/send',async(req,res)=>{
    const info=await transporter.sendMail({
        from:"Qaisir Naseer <hello@gmail.com>",
        to:'qaisirnaseer0@gmail.com',
        subject:'test',
        text:'this is test email'
    });
    res.json({messgae:'email sent',info : info})
})
app.listen(300,()=>{
    console.info(`server is listening http://localhost:3000`)
})