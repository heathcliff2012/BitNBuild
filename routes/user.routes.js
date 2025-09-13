const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  
const crypto = require('crypto');
const PRToken = require('../models/PasswordResetToken');
const bcryptjs = require('bcrypt');

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
        res.render('dashboard-public', { username: user.username });
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
        res.redirect('/public-login');

    }
);

router.get('/forgot-password', (req, res) => {
  res.render('forgot-password');
});

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  // always respond the same
  res.status(200).json({ message: 'If an account exists, you will receive a reset email shortly.' });

  try {
    const user = await User.findOne({ email });
    if (!user) return; // do nothing further

    // generate token (cryptographically secure)
    const token = crypto.randomBytes(32).toString('hex'); // 32 bytes -> 64 hex chars
    // hash token before storing
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const expiresAt = new Date(Date.now() + (parseInt(process.env.RESET_TOKEN_TTL_MIN || '60') * 60 * 1000));

    // store in separate collection
    await PRToken.create({ userId: user._id, tokenHash, expiresAt });

    // build reset URL (do NOT include email or userId)
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    // send email with SendGrid (simple example)
    await sgMail.send({
      to: user.email,
      from: process.env.FROM_EMAIL,
      subject: 'Reset your password',
      html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. This link expires in 60 minutes.</p>`
    });
  } catch (err) {
    console.error('forgot-password error', err);
    // don't reveal details
  }
});

router.get('/reset-password', (req, res) => {
  const { token } = req.query;
  if (!token) return res.status(400).json({ error: 'Invalid or expired token' });
  res.render('reset-password', { token });
});

router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;
  if (!token || !newPassword) return res.status(400).json({ error: 'Invalid request' });

  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

  const pr = await PRToken.findOne({ tokenHash, used: false, expiresAt: { $gt: new Date() } });
  if (!pr) return res.status(400).json({ error: 'Invalid or expired token' });

  const user = await User.findById(pr.userId);
  if (!user) return res.status(400).json({ error: 'Invalid or expired token' });

  // validate newPassword strength per your policy (min length, checks, etc.)
  const hashedPassword = await bcrypt.hash(newPassword, 12); // 12 rounds; or use argon2
  user.passwordHash = hashedPassword;
  await user.save();

  pr.used = true;
  await pr.save();

  // Optional: send confirmation email + revoke sessions
  await sgMail.send({ to: user.email, from: process.env.FROM_EMAIL, subject: 'Password changed', html: '<p>Your password was changed</p>' });

  return res.json({ message: 'Password reset successful' });
});

module.exports = router;