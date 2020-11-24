const express = require('express');
const passport = require('../config/ppConfig');
const db = require('../models');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  db.user.findAll().then((usersFound) => {
    res.render('/dashboard', {users: usersFound})
  })
} )
