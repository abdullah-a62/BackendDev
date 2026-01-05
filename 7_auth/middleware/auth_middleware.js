const jwt=require('jsonwebtoken')
const authmiddleware=(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    const token=authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.status(404).json({
            success:false,
            message:"access denied due to token failure"
        })
    }
    try{
        const decodedToken=jwt.verify(token,"SECRET_KEY")
        req.userInfo=decodedToken;
        next();
    }catch(e){
        console.error(`error ${e}`);
        res.status(404).json({
            success:false,
            message:"some error occur"
        })
    }
    
}
module.exports=authmiddleware;