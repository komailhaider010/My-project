const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String    
    },
    cPassword: {
        type: String    
    }
});

const User = new mongoose.model("user", userSchema);
module.exports = User;
