const express = require('express');
const Comment = require('../models/cmtModel');
const User = require('../models/userModel')
const router = express.Router();


// Define routes



router.post('/signup', async (req, res) => {
  try {
    const {username, email, password, cPassword}= req.body;
    await User.create({username, email, password, cPassword});
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error);
  }
  
});
router.get('/login', async (req, res) => {

  const {name, email, password} = req.body;
  
  try {
    const getUserByEmail = await User.findOne({email: email});
    if (getUserByEmail.password===password) {
      res.status(200).json(getUserByEmail);
    } else {
      res.status(400).json({msg: "emial or passowrd not matched"});
    }
    

} catch (error) {
    console.log(error.message);
    res.status(500).send({msg:"user NOT found"});
}
});
router.get('/home/:id', async (req, res) => {

  const {id} = req.params;
  try {
    const getUsrById = await User.findById({_id: id});
    res.status(200).json(getUsrById);

} catch (error) {
    console.log(error.message);
    res.status(500).send();
}
});




router.post('/:id/addcomment', async (req, res) => {
 
  const {id}= req.params;
  console.log(id)
  try {
    
    const {topicName, comment}= req.body;
    await Comment.create({userId: id, topicName, comment});
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error);
  }
  
});


// Get All Comment
router.get('/comments', async (req, res) => {
  try {
    const response = await Comment.find();
    res.status(200).json(response);

} catch (error) {
    res.status(500).send(error.message);
}
});

// get Single Comment
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