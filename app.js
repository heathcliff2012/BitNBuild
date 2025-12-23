const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
const path = require('path');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const indexRoutes = require('./routes/index.routes');
// In your main app.js
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
connectDB(); 
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const connectToAdminDB = require('./config/admindb');
connectToAdminDB();

app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);
app.use(adminRoutes);
app.use(indexRoutes);
app.use(express.json());  
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
