const express = require('express');
const app = express();
const path = require('path');
const userRoutes = require('./routes/user.routes');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
connectDB(); 
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);
app.use(express.json());  
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});