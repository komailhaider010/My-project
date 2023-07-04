const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    blogTitle: {
        type: String
    },
    description: {
        type: String    
    },
    Date:{
        type: Date,
        default: Date.now,
    } 
});

const Blog = new mongoose.model("blog", blogSchema);

module.exports = Blog;
