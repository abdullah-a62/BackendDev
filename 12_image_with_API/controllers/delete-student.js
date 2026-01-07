const Student=require('../model/student')
const path=require('path');
const fs=require('fs');
const deleteStudent=async(req,res)=>{
    try {
        const deletedStudent=await Student.findByIdAndDelete(req.params.id)
        if(!deletedStudent){
            return res.status(400).json({
                success:false,
                message:'student not found'
            })
        }
        if(deletedStudent.profile_pic){
            const filePath=path.join('./uploads',deletedStudent.profile_pic);
            fs.unlink(filePath,(e)=>{
                console.error(`error deleting the pic`)
            })
        }
        return res.status(200).json({
            success:true,
            messade:'student deleted',
            data:deletedStudent
        })
    } catch (error) {
        res.status(403).json({
            success:false,
            message:'server error'
        })
    }
}
module.exports=deleteStudent;