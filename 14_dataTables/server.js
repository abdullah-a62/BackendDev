import express from 'express';
const app=express();
import cors from 'cors';
import User from './model/users.js';
import { connect } from 'mongoose';

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
connect('mongodb://localhost:27017/users').then(()=>{
    console.info(`database connected`)
}).catch((e)=>{console.error(`connection failed`)});

app.post('/api/add',async (req,res)=>{
    const {username,email,age}=req.body;
    const existingUser=await User.findOne({username});
    if(existingUser){
        return res.send('user already exist');
    }
    const newUser=await User.create({
        username,email,age
    })
    res.json(newUser);
});
app.get('/api/allUsers',async(req,res)=>{
    const users=await User.find();
    if(!users){
        return res.send('no data found');
    }
    res.json({
        data:users,
    })
})
app.listen(3000,()=>{
    console.info(`sever is listening at http://localhost:3000`);
})