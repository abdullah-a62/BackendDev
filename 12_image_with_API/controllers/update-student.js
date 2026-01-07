const Student = require('../model/student');
const path=require('path');
const fs=require('fs');
const updateStudent = async (req, res) => {

    try {
        const existStudent=await Student.findById(req.params.id);
        if(!existStudent){
            if(req.file.filename){
                const oldfilepath=path.join('./uploads',req.file.filename);
                fs.unlink(oldfilepath,(e)=>{console.error(e)})
            }
        }
        if(req.file){
            if(existStudent.profile_pic){
                const oldPath=path.join('./uploads',existStudent.profile_pic);
                fs.unlink(oldPath,(e)=>{console.error(e)})
            }
        }
        req.body.profile_pic=req.file.filename;
        const updatedStudent=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedStudent){
            return res.status(404).json({
                success:false,
                message:'student not found'
            })
        }
        return res.status(200).json({
            success:true,
            message:'student data updtaed',

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'server error'
        })

    }
}
module.exports = updateStudent