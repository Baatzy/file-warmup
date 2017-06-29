const express = require('express');
const router = express.Router();

router.post('/uploads', (req, res, next) => {
  console.log(req.files);

})

module.exports = route

//Check out the NPM package 'express file upload'
