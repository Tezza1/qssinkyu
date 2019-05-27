const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// ---------- LOAD MONGOOSE MODELS ----------
require('../models/Inquiry');
const Inquiry = mongoose.model('inquiries');


// ---------- MAKING AN INQUIRY ----------

// @route     GET
// @desc      Get form to add an inquiry
// @access    Public
router.get('/add', (req, res) => {
    // form to create an enquiry page --> can do in react? --> LamgexBot
    res.render('inquiry/inquiry');
});

// @route     POST
// @desc      Add an inquiry
// @access    Public
router.post('/add', (req, res) => {
    // post data to server with information
    res.send('post --> add');
});


// ---------- ADMIN LOOKING AT INQUIRY ----------

// @route     GET
// @desc      Add an inquiry
// @access    Private
router.get('/inquiries/dashboard', (req, res) => {
    // list all inquiries
    res.send('get --> dashboard');
});

// @route     GET
// @desc      Edit an inquiry
// @access    Private
router.get('inquiries/edit/:id', (req, res) => {
    // put an inquiry into an edit form
    res.send('/:edit/:id');
});

// @route     POST
// @desc      Edit an inquiry
// @access    Private
router.post('inquiries/edit/:id', (req, res) => {
    // send data back to server with info
    res.send('/:edit/:id');
});

// @route     GET
// @desc      Delete an inquiry
// @access    Private
router.post('/delete/:id', (req, res) => {
    res.send('/delete/:id');
})

module.exports = router;
