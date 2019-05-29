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
/*    passport.authenticate('local', {
        successRedirect: '/user/dashboard',
        failureRedirect: '/',
    })(req, res, next)*/
    User.findOne({
        name: req.body.name
    })
        .then(user => {
            if(user.password === req.body.password){
                res.redirect('/users/dashboard');
            } else {
                res.redirect('/');
            }
        })
        .catch(e => {
            res.redirect('/');
        });
});

// @route     GET
// @desc      User dashboard for access to inquiries and appointments
// @access    Public
router.get('/dashboard', (req, res) => {
    res.render('users/dashboard');
})

// ---------- LOGOUT ----------
// @route     GET
// @desc      Logout
// @access    Public
router.get('/logout', (req, res) => {
    res.redirect('/');
});

module.exports = router;
