const express = require('express');
const Comment = require('../models/userModel');
const router = express.Router();




// Define routes

// Get All Users
router.get('/comments', async (req, res) => {
  try {
    const response = await Comment.find();
    res.status(200).json(response);

} catch (error) {
    res.status(500).send(error.message);
}
});

router.post('/addcomment', async (req, res) => {
  try {
    const [name, topicName, comment] = req.body;
    await Comment.create({name, topicName, comment})
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error);
  }
  
});

// get Single User
router.get('/comment/:id', async (req, res) => {

  const {id} = req.params;
  try {
    const getUserById = await Comment.findById({_id: id});
    res.status(200).json(getUserById);

} catch (error) {
    console.log(error.message);
    res.status(500).send();
}
});

router.patch('/update/:id', async(req, res) => {
  const {id} = req.params; 
  const updatedata = req.body;
  try {
    const updateComment = await Comment.findByIdAndUpdate(id , updatedata ,{new: true});
    res.status(200).json(updateComment);

} catch (error) {
    console.log(error.message);
    res.status(500).send({msg:"error"});
}
});

router.delete('/comment/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const getCommentById = await Comment.findByIdAndDelete({_id: id})
    .then(()=>{
      res.status(200).json({ msg: "user Deleted"});
  });
} catch (error) {
    console.log(error.message);
    res.status(500).send();
}
});

module.exports = router;