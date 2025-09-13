const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGO_URI_USER)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
}

module.exports = connectDB;
