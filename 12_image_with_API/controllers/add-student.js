const Student=require('../model/student');
const addStudent=async (req,res)=>{
    try {
       
        // const {username,email,city,gender,age}=req.body;
        // const newStudent=await Student.create({
            //     username,email,city,gender,age,profile_pic:fileName
            // });
            const student=new Student(req.body);
            if(req.file){
                student.profile_pic=req.file.filename;
            }
            const newStudent=await student.save();
        if(newStudent){
            return res.status(201).json({
                success:true,
                message:'student created',
                data:newStudent
            })
        }else{
            return res.status(500).json({
                success:false,
                message:'student not  created',
            })
        }
    } catch (error) {
        return res.status(403).json({
            success:false,
            message:'failed to connect',
        })
    }
}
module.exports=addStudent;