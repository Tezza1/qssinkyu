const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

// ---------- LOAD MONGOOSE MODELS ----------


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
router.post('/login', (req, res) => {
    res.send('logging in');
});

// ---------- LOGOUT ----------
// @route     GET
// @desc      Logout
// @access    Public
router.get('/logout', (req, res) => {
    res.send('logout page');
});

module.exports = router;




module.exports = router;
