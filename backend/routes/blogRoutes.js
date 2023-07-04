const express = require('express');
const router = express.Router();

const {
    addComment,
    getAllComments,
    updateComment,
    getSingleComment,
    deletComment,
    getUserComments,
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
router.post('/:userid/addcomment', createBlog );
router.get('/usercomments/:userid', getUserBlogs );

module.exports = router;