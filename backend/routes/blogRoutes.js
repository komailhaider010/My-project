const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../uploads/blogImages/' })

const {
    deletBlog,
    getSingleBlog,
    updateBlog,
    getAllBlogs,
    createBlog,
    getUserBlogs,
} = require('../controllers/blogController')


router.delete('/comment/:id', deletBlog );
router.get('/comment/:id', getSingleBlog );
router.patch('/update/:id', updateBlog );
router.get('/comments', getAllBlogs);
router.post('/:userid/addcomment', upload.single('blogImg'), createBlog );
router.get('/usercomments/:userid', getUserBlogs );

module.exports = router;