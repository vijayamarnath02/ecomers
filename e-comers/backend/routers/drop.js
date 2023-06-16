const express = require('express');
const router = express.Router();
const server = require('../module/product');

router.get('/1', function(req, res, next) {
  server.find({gender:'m'}).then(function(result) {
    console.log(result);
    res.status(200).json({ message: result });
  }).catch(function(err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  });
});

router.get('/2', function(req, res, next) {
  server.find({gender:'f'}).then(function(result) {
    console.log(result);
    res.status(200).json({ message: result });
  }).catch(function(err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  });
});

module.exports = router;
