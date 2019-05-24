const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// ---------- LOAD MONGOOSE MODELS ----------
require('../models/Appointment');
const Appointment = mongoose.model('appointments');


// ---------- MAKING AN APPOINTMENT ----------

// @route     GET
// @desc      Get form to add an appointment
// @access    Public
router.get('/add', (req, res) => {
    res.send('get --> add');
});

// @route     POST
// @desc      Add an appointment
// @access    Public
router.post('/add', (req, res) => {
    res.send('post --> add');
});


// ---------- ADMIN LOOKING AT APPOINTMENTS ----------

// @route     GET
// @desc      Add an appointment
// @access    Private
router.get('/dashboard', (req, res) => {
    res.send('get --> dashboard');
});

// @route     GET
// @desc      Edit an appointment
// @access    Private
router.post('/edit/:id', (req, res) => {
    res.send('/:edit/:id');
});

// @route     GET
// @desc      Delete an appointment
// @access    Private
router.post('/delete/:id', (req, res) => {
    res.send('/delete/:id');
})

module.exports = router;
