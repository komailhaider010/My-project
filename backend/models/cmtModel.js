const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    topicName: {
        type: String
    },
    comment: {
        type: String    
    },
    Date:{
        type: Date,
        default: Date.now,
    } 
});

const Comment = new mongoose.model("comment", commentSchema);

module.exports = Comment;
