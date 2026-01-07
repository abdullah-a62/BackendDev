const Student=require('../model/student');
const getAllStudents=async(req,res)=>{

    try{
        const students=await Student.find();
        if(students){
            return res.status(200).json({
                success:true,
                message:'data found',
                data:students
            })
        }else{
            return res.status(404).json({
                success:false,
                message:'no data found'
            })
        }
    } catch (e) {
        return res.status(403).json({
            success:false,
            message:'server error'
        })
    }
}
module.exports=getAllStudents