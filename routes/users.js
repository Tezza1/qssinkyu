const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');

// ---------- LOAD MONGOOSE MODELS ----------
require('../models/User');
const User = mongoose.model('users');


// do this with React router?????
// ---------- LOGIN ----------
// @route     GET
// @desc      Get form to login
// @access    Public
router.get('/login', (req, res) => {
    res.send('login page');
});

// @route     GET
// @desc      Login
// @access    Public
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/', // TODO' fix-up
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next)
});

// ---------- LOGOUT ----------
// @route     GET
// @desc      Logout
// @access    Public
router.get('/logout', (req, res) => {
    res.send('logout page');
});

module.exports = router;
