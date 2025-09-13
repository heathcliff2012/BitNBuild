const express = require('express');
const router = express.Router();

router.get('/dashboard-admin', (req, res) => {
  res.render('dashboard-admin');
});

router.get('/dashboard-public', (req, res) => {
  res.render('dashboard-public');
});

module.exports = router;
