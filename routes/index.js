const express = require('express');
const router = express.Router();

// This app has no "home" page, but your projects should 😀
router.get('/', function(req, res, next) {
  res.redirect('/flights');
});

module.exports = router;
