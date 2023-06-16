const server = require('../module/details');
const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
 
  const name = req.body.username;
  const mobile = req.body.phno;
  const email = req.body.email;
  const password = req.body.pass;
  const conpass = req.body.cpass;

  const errors = [];
  if(req.body.username == undefined || req.body.phno == undefined || req.body.email == undefined  || req.body.pass == undefined|| req.body.cpass == undefined ){
        errors.push('Pls Fill All the form Details');
    console.log(errors.length > 0);
  }
else{
if (!/^[A-Za-z0-9 ]+$/.test(name) || !/^([^0-9]*)$/.test(name)) {
    errors.push('Name cannot contain special characters');
  }

  if (!mobile || mobile.trim() === '') {
    errors.push('Phone number is required');
  } else if (!/^\d{10}$/.test(mobile)) {
    errors.push('Invalid phone number (10 digits required)');
  }

  if (!email || email.trim() === '') {
    errors.push('Email is required');
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.push('Invalid email address');
  }

  if (!password || password.length < 8) {
    errors.push('Password length must be at least 8 characters');
  } else if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  } else if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  } else if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (password !== conpass) {
    errors.push('Confirm password does not match');
  } else if (conpass.length < 8) {
    errors.push('Confirm password length must be at least 8 characters');
  } else if (!/[A-Z]/.test(conpass)) {
    errors.push('Confirm password must contain at least one uppercase letter');
  } else if (!/[a-z]/.test(conpass)) {
    errors.push('Confirm password must contain at least one lowercase letter');
  } else if (!/[0-9]/.test(conpass)) {
    errors.push('Confirm password must contain at least one number');
  }
}
  if (errors.length > 0) {
    res.status(401).json({ message: errors });

  }
   else {
    server.findOne({ email: email }).then(function(result) {
      if (result) {
        errors.push('Email already exists');
        res.status(401).json({ message: errors });
        res.json({status:2 ,message: errors });
      } 
      else {
        const newData = new server({
          name: name,
          mobile: mobile,
          email: email,
          password: password,
          confirmpassword: conpass
        });

        newData.save().then(function() {
          res.status(200).json({ message: 'User registered successfully' });
        });
      }
    });
  }

});

module.exports = router;
