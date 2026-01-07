const express=require('express');
const router=express.Router();

const upload=require('../helper/multer-config')
const home=require('../controllers/home');
const getAllStudents=require('../controllers/all-students')
const addStudent=require('../controllers/add-student');
const getSingleStudent=require('../controllers/single-student');
const updateStudent=require('../controllers/update-student');
const deleteStudent=require('../controllers/delete-student')


router.get('/home',home);
router.get('/all-students',getAllStudents);
router.get('/all-students/:id',getSingleStudent);
router.post('/add-student',upload.single('profile_pic'),addStudent);
router.put('/update-student/:id',upload.single('profile_pic'),updateStudent);
router.delete('/delete-student/:id',deleteStudent);

module.exports=router;