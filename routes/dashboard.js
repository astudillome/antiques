const express = require('express');
<<<<<<< HEAD
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');

router.get('/dashboard', (req, res) => {
  db.user.findAll().then((usersFound => {
    res.render('/dashboard', {users: usersFound})
  }))

})
=======
const passport = require('../config/ppConfig');
const db = require('../models');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  db.user.findAll().then((usersFound) => {
    res.render('/dashboard', {users: usersFound})
  })
} )
>>>>>>> submain
