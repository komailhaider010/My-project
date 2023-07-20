const express = require('express');
const router = express.Router();
const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: './public/blogImages',
//     filename: (req, file, cb)=>{
//         cb(null, file.filename+Date.now())
//     }
// })

// const upload = multer({
//     storage: storage
// })



const upload = multer({
    storage: multer.diskStorage({
        destination:function(req, file, cb){
            cb(null, './public/blogImages')
        },
        filename:function(req, file, cb){
            console.log(file);
            cb(null, file.fieldname + "-"+ Date.now()+".jpg")
        }
    })
});

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