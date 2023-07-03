const Comment = require("../models/cmtModel");
const User = require("../models/userModel");

// ADD COMMENT
const addComment = async (req, res) => {
  const { userid } = req.params;
  try {
    const { topicName, comment } = req.body;
    await Comment.create({ userId: userid, topicName, comment });
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error);
  }
};

// Get All Comment

const getAllComments = async (req, res) => {
  try {
    const response = await Comment.find().populate("userId");
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// UPDATE COMMENT
const updateComment = async (req, res) => {
  const { id } = req.params;
  const updatedata = req.body;
  try {
    const updateCmt = await Comment.findByIdAndUpdate(id, updatedata, {
      new: true,
    });
    res.status(200).json(updateCmt);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: "error" });
  }
};

// get Single Comment

const getSingleComment = async (req, res) => {
  const { id } = req.params;
  try {
    const getUserById = await Comment.findById({ _id: id });
    res.status(200).json(getUserById);
  } catch (error) {
    console.log(error.message);
    res.status(500).send();
  }
};

// DELETE COMMNET
const deletComment = async (req, res) => {
  const { id } = req.params;
  try {
    const getCommentById = await Comment.findByIdAndDelete({ _id: id }).then(
      () => {
        res.status(200).json({ msg: "user Deleted" });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send();
  }
};

const getUserComments = async(req, res)=>{
  const { userid } = req.params;

  try {
    const userComments = await Comment.find({userId: userid});
    res.status(200).json(userComments); 
  } catch (error) {
    res.status(400).json({msg: "error"});
  }
}

module.exports = {
  addComment,
  getAllComments,
  updateComment,
  getSingleComment,
  deletComment,
  getUserComments,
};
