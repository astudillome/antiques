const express = require('express');
const db = require('../models')
const router = express.Router();
const passport = require('../config/ppConfig');



router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  // finding or creating a user, given their name, password, and emial
  db.user.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).then(([user, created]) => {
    // if created, this means success and we can redirect to home
      if (created) {
        console.log(`${user.name} was created!`)
        res.redirect('/');
      } else {
        // if not created, the email already exists
        console.log(`${user.email} already exists`)
        res.redirect('auth/login');
      }
  }).catch(error => {
    // if an error occurs, let's see it!
      console.log(`An error occurred: ${error.message}`)
      res.direct('/auth/signup');
  })
})

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username and/or password',
  successFlash: 'You have logged in'
}));


router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You have logged out');
  res.redirect('/');
});

module.exports = router;
