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
    res.render('appointment/appointment');
});

// @route     POST
// @desc      Add an appointment
// @access    Public
router.post('/add', (req, res) => {
    const newAppt = {
                name: req.body.name,
                email: req.body.email,
                telephone: req.body.telephone,
                appointment_date: req.body.appointment_date,
                appointment_time: req.body.appointment_time
            };
            new Appointment(newAppt)
                .save()
                .then(idea => {
                    res.redirect(`/`);
                });
});


// ---------- ADMIN LOOKING AT APPOINTMENTS ----------

// @route     GET
// @desc      Add an appointment
// @access    Private
router.get('/dashboard', (req, res) => {
    Appointment.find()
        .sort({ date: 'desc' })
        .then(appt => {
            res.render('appointment/dashboard', {
                appts: appt
    });
        })
});

// @route     GET
// @desc      Form to edit an appointment
// @access    Private
router.get('/edit/:id', (req, res) => {
    Appointment.findOne({
            _id: req.params.id
        })
            .then(appt => {
                res.render('appointment/edit', {
                    errors: null,
                    appt
                });
            });
});

// @route     POST
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
