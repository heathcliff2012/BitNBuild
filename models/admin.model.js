const admin_mongoose = require('mongoose');

const adminSchema = new admin_mongoose.Schema({
    email: { type: String, required: true, unique: true, trim: true, minlength: [5, 'Email must be at least 5 characters long'] },
    password: { type: String, required: true, minlength: [6, 'Password must be at least 6 characters long'] },
});

const Admin = admin_mongoose.model('admin', adminSchema);

module.exports = Admin;