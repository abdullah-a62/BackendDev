const express=require('express');
const app=express();
const connectToDb=require('./database/db');
const router = require('./routes/route'); 
const port=3000;
app.use(express.json());
connectToDb();
app.use("/api/home",router);
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
})