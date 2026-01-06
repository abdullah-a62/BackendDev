// require('dotenv').config()
const express=require('express')
const connectToDataBase=require('./dataBase/db');
const routes=require('./routes/books_routes')
const app=express()
const PORT=3000;
connectToDataBase();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('server is running');
})
app.use('/api/books',routes)
app.listen(PORT,()=>{
    console.info(`Server is listening at http://localhost:${PORT}`)
})
