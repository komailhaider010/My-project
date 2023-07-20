const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
    deletBlog,
    getSingleBlog,
    updateBlog,
    getAllBlogs,
    createBlog,
    getUserBlogs,
} = require('../controllers/blogController')


// Multer middleware
const storage =  multer.diskStorage({
    destination:async function(req, file, cb){
        cb(null, './public/blogImages')
    },
    filename: async function(req, file, cb){
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
    }   
  });

const upload = multer({storage: storage});
  

router.delete('/comment/:id', deletBlog );
router.get('/comment/:id', getSingleBlog );
router.patch('/update/:id', updateBlog );
router.get('/comments', getAllBlogs);
router.post('/:userid/addcomment', upload.single('blogImg') , createBlog );
router.get('/usercomments/:userid', getUserBlogs );

module.exports = router;