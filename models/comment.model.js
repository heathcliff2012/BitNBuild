const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    username: { type: String, default: 'Anonymous' },
    createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;