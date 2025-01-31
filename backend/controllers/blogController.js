const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const fs = require('fs');
const path = require('path')





// ADD COMMENT
const createBlog =  async (req , res) => {
  const { userid } = req.params;

  console.log(req.file);
  try {

    // Assuming you have set up the multer middleware correctly
    if (!req.file) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }


    const blogImg = `/blogImages/${req.file.filename}`;
    console.log(blogImg);
    const { blogTitle, description } = req.body;
    await Blog.create({ userId: userid, blogImg,  blogTitle, description });
    res.status(201).json({ msg: 'Blog Created' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

// Get All Comment

const getAllBlogs = async (req, res) => {
  try {
    const response = await Blog.find().populate("userId");
    // response.forEach(blog => {
    //    // Assuming blogImg contains only the filename (e.g., "image.jpg")
    //    blog.blogImg = `/blogImages/${blog.blogImg}`
    // });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// UPDATE COMMENT
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const updatedata = req.body;
  try {
    const updateCmt = await Blog.findByIdAndUpdate(id, updatedata, {
      new: true,
    });
    res.status(200).json(updateCmt);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: "error" });
  }
};

// get Single Comment

const getSingleBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const getUserById = await Blog.findById({ _id: id });
    res.status(200).json(getUserById);
  } catch (error) {
    console.log(error.message);
    res.status(500).send();
  }
};

// DELETE COMMNET
const deletBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const getBlogById = await Blog.findByIdAndDelete({ _id: id });
     // Delete the previous file if a new one is uploaded
     const oldBlogImage = path.join(__dirname, '..','public', getBlogById.blogImg);
     if (fs.existsSync(oldBlogImage)) {
         fs.unlinkSync(oldBlogImage);
     }
     res.status(200).json({ msg: "Blog Deleted Sucessfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send();
  }
};

const getUserBlogs = async(req, res)=>{
  const { userid } = req.params;

  try {
    const userComments = await Blog.find({userId: userid}).populate("userId");
    res.status(200).json(userComments); 
  } catch (error) {
    res.status(400).json({msg: "error"});
  }
}

module.exports = {
  createBlog,
  getAllBlogs,
  updateBlog,
  getSingleBlog,
  deletBlog,
  getUserBlogs,
};
