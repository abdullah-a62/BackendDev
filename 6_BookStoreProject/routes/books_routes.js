const express=require('express')
const router=express.Router();
const {getAllBooks,getsingleBook,addBook,updateBookById,deleteBookByID}=require('../controllers/booksController')

router.get('/get',getAllBooks);
router.get('/get/:title',getsingleBook);
router.post('/add',addBook);
router.put('/update/:title',updateBookById);
router.delete('/delete/:title',deleteBookByID);

module.exports=router;