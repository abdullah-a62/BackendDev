const adminAuthMiddleware=(req,res,next)=>{
    if(req.userInfo.role !== "admin"){
        return res.status(404).json({
            success:true,
            message:'only admin can acess this page'
        })
    }
    next();
}
module.exports=adminAuthMiddleware;