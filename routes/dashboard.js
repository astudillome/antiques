const express = require('express');
const passport = require('../config/ppConfig');
const db = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
  db.user.findAll().then((usersFound) => {
    res.render('dashboard', {users: usersFound})
  })
} )

module.exports = router;