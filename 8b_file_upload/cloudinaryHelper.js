const cloudinary=require('./cloudinary')
const cloudinaryHelper=async (filepath)=>{
 try {
    const result=await cloudinary.uploader.upload(filepath);
    return {
        url:result.secure_url,
        publicId:result.public_id
    }
 } catch (error) {
    console.error(error)
 }
}
module.exports=cloudinaryHelper;