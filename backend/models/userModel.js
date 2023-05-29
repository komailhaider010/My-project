const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    topicName: {
        type: String
    },
    comment: {
        type: String    
    }  
});

const Comment = new mongoose.model("comment", commentSchema);

module.exports = Comment;
