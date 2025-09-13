const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const adminModel = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

router.get('/admin-login', (req, res) => {
    res.render('admin-login'); 
});

router.post('/admin-login', 
    body('email').trim().isEmail().isLength({ min: 5 }),
    body('password').trim().isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const admins = await adminModel.findOne({
            email: email.toLowerCase().trim()
        });
        if (!admins) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, admins.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { userId: admins._id, email: admins.email, username: admins.username },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );
        res.cookie('token', token); 
        res.render('dashboard-admin');
    }
);

module.exports = router;