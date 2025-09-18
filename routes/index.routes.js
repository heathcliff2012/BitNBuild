const express = require('express');
const { validationResult } = require('express-validator');
const ledgerModel = require('../models/ledger.model');
const { body } = require('express-validator');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI_USER);

router.get('/dashboard-admin', (req, res) => {
  res.render('dashboard-admin');
});

router.get('/transport', (req, res) => {
  res.render('transport');
});

router.post('/dashboard-admin', 
  body('title').notEmpty().withMessage('Title is required'),
  body('allocation').isNumeric().withMessage('Allocation must be a number'),
  body('description').notEmpty().withMessage('Description must be at least 10 characters long'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()
      });
    }
    const { title, description, allocation } = req.body;
    
    const newLedger = await ledgerModel.create({title, description, allocation});
    console.log(newLedger);

    res.render('dashboard-admin', { title: req.body.title, description: req.body.description, allocation: req.body.allocation });
  }
);
router.get('/dashboard-public', (req, res) => {
  const username = req.cookies.username
  res.render('dashboard-public', { username: username });
});

router.get('/public-ledger', (req, res) => {
  res.render('public-ledger');
});

router.get('/feedback', (req, res) => {
  res.render('feedback');
});

router.get('/college-funds', (req, res) => {
  res.render('college-funds');
});

router.get('/education', (req, res) => {
  res.render('education');
});

router.get('/healthcare', (req, res) => {
  res.render('healthcare');
});

router.get('/subsidies', (req, res) => {
  res.render('subsidies');
});

router.get('/infrastructure', (req, res) => {
  res.render('infrastructure');
});

router.get('/community-feedback', (req, res) => {
  res.render('feedback');
});


router.get('/chatbot', (req, res) => {
  res.render('chatbot');
});

router.get('/', (req, res) => {
  res.render('home');
});



module.exports = router;
