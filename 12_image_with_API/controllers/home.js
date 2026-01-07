
const homePage=(req,res)=>{
    res.status(200).json({
        success:true,
        message:'wellcome to home page'
    })
}
module.exports=homePage;