const express = require('express');

const { body } = require('express-validator');
const router = express.Router();
const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });
const fileModel = require('../models/file.model');
const upload = multer({ dest: 'uploads/' });

router.get('/dashboard-admin', (req, res) => {
  res.render('dashboard-admin');
});

router.post('/upload-file', upload.single('file'), (req, res) => {
  console.log(req.body);
  console.log("File",req.file);
  
    // const { filename, mimetype, size, path } = req.file;
    // const newFile = new fileModel({ filename, mimetype, size, path });
    // newFile.save();
    // alert('File uploaded successfully');
    res.redirect('/transport');
    
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

router.get('/transport', (req, res) => {
  res.render('transport');
});

module.exports = router;
