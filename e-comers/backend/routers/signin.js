const server = require('../module/details');
const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
  const name = req.body.username;
  const password = req.body.pass;
  let errors = [];
  let count = 0;

  server.findOne({ email: name }).then(function(result) {
    console.log(result);
    if (result != null) {
      const email1 = result.email;
      const pass1 = result.password;
      const cpass = result.confirmpassword;

      if (name === email1 && pass1 === password && cpass === password) {
        count = 1;
      } else {
        if (name !== email1) {
          console.log("email is not valid");
          errors.push('Please enter the correct email ID');
        }
        if (pass1 !== password) {
          console.log("password is incorrect");
          errors.push('Please enter the correct password');
        }
      }
    } else {
      errors.push('Sorry, you don\'t have an account');
      console.log(errors);
    }

    if (errors.length > 0) {
      console.log(errors);
      res.status(401).json({ message: errors });
    } else if (count === 1) {
      console.log(errors);
      res.status(200).json({ message: 'User authenticated successfully' });
    }
  });
});

module.exports = router;
  