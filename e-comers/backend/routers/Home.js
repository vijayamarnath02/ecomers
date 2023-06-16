const express = require('express');
const router = express.Router();
const server = require('../module/product');
const temp = require('../module/temp');
const err = require('../module/last1');
router.get('/', function(req, res, next) {
  server.find({})
    .then(function(result) {
      console.log(result);
      res.status(200).json({ message: result });
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

router.get('/temp', function(req, res, next) {
  temp.deleteMany({})
    .then(function(result) {
      console.log(result);
      res.status(200).json({ message: result });
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

router.post('/cart', function(req, res) {
  console.log(req);

  const  Pname = req.body.name;
  const  count = req.body.count;
  const  Amount = req.body.Amount;
  temp.create({ Pname:Pname,Count:count,Amount:Amount })
    .then(function(result) {
      console.log(result);
      res.status(200).json({ message: 'Product added to cart successfully.' });
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
    
});

module.exports = router;
