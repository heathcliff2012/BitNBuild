const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/public-login', (req, res) => {
    res.render('public-login'); 
});

router.post('/public-login', 
    body('email').trim().isEmail().isLength({ min: 5 }),
    body('password').trim().isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = await userModel.findOne({
            email: email.toLowerCase().trim()
        });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );
        res.cookie('token', token); 
        res.json({ message: 'Login successful', token });
    }
);

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', 
    body('username').trim().isLength({ min: 3 }),
    body('email').trim().isEmail().isLength({ min: 5 }),
    body('password').trim().isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({ username, email, password: hashedPassword });
        res.json({ message: 'User registered successfully', userId: newUser._id });

    }
);

module.exports = router;