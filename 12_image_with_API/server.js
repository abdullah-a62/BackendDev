const express=require('express');
const multer=require('multer');
const router=require('./routes/route')
const app=express();
const PORT=3000;
const connectDb=require('./database/db');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
connectDb();
app.use('/api/images/',router);
app.listen(PORT)