const express = require('express');
const router = express.Router();
const server = require('../module/product');
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


router.post('/delete', function(req, res) {
  var Pname = req.body.name;
  temp.deleteOne({Pname:Pname}).then(function(result){
    res.status(200).json({ message: 'Cart item deleted successfully' });
  })
  .catch(function(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});
router.post('/update', function(req, res) {
const Amount =req.body.amount;
const Pname = req.body.Pname;
const Count = req.body.count;
  temp.updateOne({Pname:Pname},{$set:{Amount:Amount,Count:Count}}).then(function(result){
    res.status(200).json({ message: 'Update item  successfully' });
  })
  .catch(function(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
