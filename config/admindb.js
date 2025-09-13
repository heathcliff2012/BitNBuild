const mongoose = require('mongoose');

function connectAdminDB() {
    mongoose.connect(process.env.MONGO_URI_ADMIN)
    .then(() => {
        console.log('Admin MongoDB connected');
    })
    .catch(err => {
        console.error('Admin MongoDB connection error:', err);
    });
}

module.exports = connectAdminDB;