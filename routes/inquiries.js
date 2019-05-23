const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

// ---------- LOAD MONGOOSE MODELS ----------



// ---------- MAKING AN INQUIRY ----------

// @route     GET
// @desc      Get form to add an inquiry
// @access    Public
router.get('/add', (req, res) => {
    res.send('get --> add');
});

// @route     POST
// @desc      Add an inquiry
// @access    Public
router.post('/add', (req, res) => {
    res.send('post --> add');
});


// ---------- ADMIN LOOKING AT INQUIRY ----------

// @route     GET
// @desc      Add an inquiry
// @access    Private
router.get('/dashboard', (req, res) => {
    res.send('get --> dashboard');
});

// @route     GET
// @desc      Edit an inquiry
// @access    Private
router.post('/edit/:id', (req, res) => {
    res.send('/:edit/:id');
});

// @route     GET
// @desc      Delete an inquiry
// @access    Private
router.post('/delete/:id', (req, res) => {
    res.send('/delete/:id');
})

module.exports = router;
