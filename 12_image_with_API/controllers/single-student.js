const Student=require('../model/student');
const getSingleStudent=async(req,res)=>{
    try {
        const student=await Student.findById(req.params.id);
        if(!student){
            return res.status(404).json({
                success:false,
                message:'student not found',
            })
        }
        res.status(200).json({
            success:true,
            message:'student found',
            data:student
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'server error',
        })
    }
}
module.exports=getSingleStudent;