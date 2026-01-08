import express, { json, urlencoded } from 'express';
const app=express();
import twilio from 'twilio';
const authId="use your own";
const authToken="use your own"
const client=twilio(authId,authToken);
app.use(json());
app.use(urlencoded({extended:false
}))

app.get('/',(req,res)=>{
    res.json({
        message:'wellcome to home'
    })
});
app.post('/send',async(req,res)=>{
    const {message,from,to}=req.body;
    try {
        const result=await client.messages.create({
            body:message,
            from:from,
            to:to
        });
        res.status(200).json({
            success:true,
            message:'message sent',
            sId:result.sid
        })
    } catch (error) {
        res.status(500).json({
            message:'server error'
        })
    }
    
})
app.listen(3000,()=>{
    console.info(`http://localhost:3000`);
})