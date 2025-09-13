const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true, lowercase: true, minlength: [3, 'Username must be at least 3 characters long'] },
    email: { type: String, required: true, unique: true, trim: true, minlength: [5, 'Email must be at least 5 characters long'] },
    password: { type: String, required: true, minlength: [6, 'Password must be at least 6 characters long'] },
});

const User = mongoose.model('user', userSchema);

module.exports = User;