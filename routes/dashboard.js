const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');

router.get('/dashboard', (req, res) => {
  db.user.findAll().then((usersFound => {
    res.render('/dashboard', {users: usersFound})
  }))

})