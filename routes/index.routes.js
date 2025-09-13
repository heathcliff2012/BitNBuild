const express = require('express');
const router = express.Router();

router.get('/dashboard-admin', (req, res) => {
  res.render('dashboard-admin');
});

router.get('/dashboard-public', (req, res) => {
  const username = req.cookies.username
  res.render('dashboard-public', { username: username });
});

router.get('/public-ledger', (req, res) => {
  res.render('public-ledger');
});

router.get('/community-feedback', (req, res) => {
  res.render('feedback');
});

router.get('/ledger_transport.html', (req, res) => {
  res.render('ledger_transport');
});

module.exports = router;
