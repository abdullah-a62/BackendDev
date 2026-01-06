const cloudinaryHelper=require('./cloudinaryHelper')
const imageUpload=async (req,res)=>{
    try {
        const {url,publicId}=await cloudinaryHelper(req.file.path);
        res.json({
            success:true,
            message:{url,publicId}
        })
    } catch (error) {
        console.error('error')
    }
}
module.exports=imageUpload;