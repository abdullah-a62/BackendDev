const express=require('express')
const router=express.Router();
const {registerUser,loginUser}=require('../controllers/user_controller');
const authmiddleware=require('../middleware/auth_middleware');
const adminAuthentication=require('../middleware/admin_auth')
router.post("/register",registerUser);
router.post('/login',loginUser);
router.get('/wellcome',authmiddleware,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"wellcome to home page"
    })
})
router.get('/admin',authmiddleware,adminAuthentication,(req,res)=>{
    res.status(200).json({
        success:false,
        message:"wellcome to admin page"
    })
})

module.exports=router;