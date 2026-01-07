const express=require('express');
const router=require('./routes/route')
const path=require('path');
const cors=require('cors');
const app=express();
const PORT=3000;
const connectDb=require('./database/db');
app.use(cors());
app.use('./uploads',express.static(path.join(__dirname,'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
connectDb();
app.use('/api/images',router);
app.listen(PORT)