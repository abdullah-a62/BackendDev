const express=require('express');
const User=require('../model/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const registerUser=async (req,res)=>{
    try{
        const {username,email,password,role}=req.body;
        const existingUser=await User.findOne({$or :[{username},{email}]});
        if(existingUser){
            return res.status(404).json({
                success:false,
                message:"user already exist"
            })
        };
        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);
        const newUser=await User.create({
            username:username,
            email:email,
            password:hashedPassword,
            role:role || "user"
        }) ;
        if(newUser){
            return res.status(200).json({
                success:true,
                message:'user created successfuly'
            })
        }else{
            return res.status(404).json({
                success:false,
                message:'failed to register try again!'
            })
        }
    }catch(e){
        return res.status(404).json({
            success:false,
            message:'failed to register'
        })

    }

}
const loginUser=async (req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username});
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user credentials does not match",

            })
        }
        const isPassowrdMatch=await bcrypt.compare(password,user.password);
        if(!isPassowrdMatch){
            return res.status(404).json({
                success:false,
                message:"credentials does not match"
            })
        }
        const accessToken=jwt.sign({
            userId:user._id,
            username:user.username,
            role:user.role
        },"SECRET_KEY",{expiresIn:'1m'})
        res.status(200).json({
            success:true,
            message:'user loged in',
            accesstoken :accessToken
        })
    }catch(e){
        return res.status(404).json({
            success:false,
            message:"failed"
        })
    }
}

module.exports={registerUser,loginUser}