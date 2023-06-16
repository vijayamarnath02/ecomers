const express = require('express');
const router = express.Router();
const clear = require('../module/last1');
const server = require('../module/details');
const temp = require('../module/temp');
router.get('/', function(req, res, next) {

  temp.aggregate([
    {
      '$lookup': {
        'from': 'products',
        'localField': 'Pname',
        'foreignField': 'Pname',
        'as': 'string'
      }
    },
    {
      '$project': {
        'amount': {
          '$arrayElemAt': ['$string.Amount', 0]
        },
        'Pname': 1,
        'Amount': 1,
        'Count': 1
      }
    }
  ])
    .then(function(result) {
      console.log(result);
      res.status(200).json({ message: result });
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});


router.post('/insert', function(req, res, next) {
  const dataArray = req.body;
  const convertedArray = [];

  for (let i = 0; i < dataArray.length; i++) {
    const item = dataArray[i];
    const pname = item.Pname;
    const amount = item.Amount;
    const count = item.Count;

    const convertedItem = {
      pname: pname,
      amount: amount,
      count: count
    };
    convertedArray.push(convertedItem);
  }

  clear.create({ Data: convertedArray })
    .then(function(result) {
      console.log(result);
      return res.status(200).json({ message: result });
    })
    .catch(function(err) {
      console.log(err);
    });
});



module.exports = router;