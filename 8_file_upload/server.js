const express=require('express')
const app=express();
const multer=require('multer');
const path=require('path')
app.use(express.json());
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename:function(req,file,cb){
        const newFilename=Date.now()+path.extname(file.originalname);
        cb(null,newFilename);
    }
});
const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startsWith('image/')){
        cb(null,true);
    }else{
        cb(new Error('only images are allowed'),false)
    }
}
const upload=multer({
    storage:storage,
    limits:{fileSize:1024*1024*5},
    fileFilter:fileFilter

})
app.post('/addImage',upload.array('profile',2),(req,res)=>{
    res.status(200).json({
        message:'image added',
        success:req.files
    })
})
app.listen(3000,()=>{
    console.info(`http://localhost:3000`)
})