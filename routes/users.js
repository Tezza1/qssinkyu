const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');

// ---------- LOAD MONGOOSE MODELS ----------
require('../models/User');
const User = mongoose.model('users');


// ---------- LOGIN ----------
// @route     GET
// @desc      Get form to login
// @access    Public
router.get('/login', (req, res) => {
    res.render('users/login');
});

// @route     GET
// @desc      Login
// @access    Public
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/user/dashboard',
        failureRedirect: '/',
    })(req, res, next)
});

// @route     GET
// @desc      User dashboard
// @access    Private
router.post('/user/dashboard', (req, res, next) => {
    // lists buttons to access:
    //    - calendar
    //    - inquiries
    //    - appointments
});


// ---------- LOGOUT ----------
// @route     GET
// @desc      Logout
// @access    Public
router.get('/logout', (req, res) => {
    res.send('logout page');
});

module.exports = router;
