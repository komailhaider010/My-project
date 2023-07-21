const Comment = require('../models/blogModel');
const User = require('../models/userModel');
const path = require('path');
const fs = require('fs');
const { log } = require('console');

// User SignUp
const signUp = async (req, res) => {
  try {

    const { username, email, password, cPassword, profileImg } = req.body;
    const check = await User.findOne({ email: email })
    if (check) {
      res.status(402).json({ msg: "user Already exist" })
    } else {
      await User.create({ username, email, password, cPassword, profileImg });
      res.status(201).json({ msg: "User Created" });
    }

  } catch (error) {
    console.log(error);
  }

}

// USER LOGIN

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const getUserByEmail = await User.findOne({ email: email });
    if (getUserByEmail.password === password) {
      res.status(200).json(getUserByEmail);
    } else {
      res.status(400).json({ msg: "emial or passowrd not matched" });
    }


  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: "user NOT found" });
  }
}


// Get User Dashboard
const userDashBoard = async (req, res) => {
  const { userid } = req.params;
  try {
    const getUsrById = await User.findById({ _id: userid });
    res.status(200).json(getUsrById);

  } catch (error) {
    console.log(error.message);
    res.status(500).send();
  }
}

const updateUserProfile = async (req, res) => {
  const { userid } = req.params;

  const { email, username, password, cPassword } = req.body;
  const profileImg = `/profileImages/${req.file.filename}`;

  try {
    const user = await User.findById({ _id: userid });

    // IF FILE PROFILE IMAGE EXIST 
    if(user.profileImg){
      const oldProfileImage = path.join(__dirname, '..','public', user.profileImg);
     if (fs.existsSync(oldProfileImage)) {
         fs.unlinkSync(oldProfileImage);
     }

    }

    // ONLY UPDATE DATA WHICH DEFINE
    if (email) user.email = email;
    if (username) user.username = username;
    if (req.file && req.file.filename) user.profileImg = profileImg;
    if (password) user.password = password;
    if (cPassword) user.cPassword = cPassword;

    await user.save()

    res.status(200).json({ msg: "UserProfile has been updated successfully" });


  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server Error" })
  }
};


module.exports = {
  signUp,
  login,
  userDashBoard,
  updateUserProfile,
};
