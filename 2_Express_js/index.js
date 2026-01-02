const Express=require('express')
const app=Express()
const port=3000;
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
})