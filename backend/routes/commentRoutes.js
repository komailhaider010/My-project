const express = require('express');
const router = express.Router();

const {
    addComment,
    getAllComments,
    updateComment,
    getSingleComment,
    deletComment,
} = require('../controllers/commentController')


router.delete('/comment/:id', deletComment );
router.get('/comment/:id', getSingleComment );
router.patch('/update/:id', updateComment );
router.get('/comments', getAllComments);
router.post('/:userid/addcomment', addComment );

module.exports = router;