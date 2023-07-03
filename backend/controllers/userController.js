const Comment = require('../models/cmtModel');
const User = require('../models/userModel')

// User SignUp
const signUp = async (req, res) =>{
  try {
    
    const {username, email, password, cPassword}= req.body;
    const check = await User.findOne({email:email})
    if(check){
      res.status(402).json({msg: "user Already exist"})
    }else{
      await User.create({username, email, password, cPassword});
      res.status(201).json({ msg: "User Created" });
    }
   
  } catch (error) {
    console.log(error);
  }
  
}

// USER LOGIN

const login = async (req, res)=>{
  const {email, password} = req.body;
  
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
}


// Get User Dashboard
const userDashBoard = async(req, res)=>{
  const {userid} = req.params;
  try {
    const getUsrById = await User.findById({_id: userid});
    res.status(200).json(getUsrById);

} catch (error) {
    console.log(error.message);
    res.status(500).send();
}
}


module.exports = {
  signUp,
  login,
  userDashBoard,
};