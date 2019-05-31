const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let date = require('date-and-time');

// ---------- LOAD MONGOOSE MODELS ----------
require('../models/Appointment');
const Appointment = mongoose.model('appointments');


// ---------- MAKING AN APPOINTMENT ----------

// @route     GET
// @desc      Get form to add an appointment
// @access    Public
router.get('/add', (req, res) => {

    // https://www.npmjs.com/package/date-and-time
    let now = new Date();
    let today = date.format(now, 'YYYY-MM-DD');
    let tomorrow = date.addDays(now, 1);
    let next_month = date.addMonths(now, 1);

    res.render(
        'appointment/appointment',
        {
            today,
            next_month: date.format(next_month, 'YYYY-MM-DD')
        }
    );
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
                })
                .catch(e => {
                    res.redirect('/');
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
        .catch(e => {
            res.redirect('/');
        });
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
            })
            .catch(e => {
                res.redirect('/');
            });
});

// @route     POST
// @desc      Edit an appointment
// @access    Private
router.put('/edit/:id', (req, res) => {
    Appointment.findOne({ _id: req.params.id })
        .then(appt => {
           appt.name = req.body.name;
           appt.email = req.body.email;
           appt.telephone = req.body.telephone;
           appt.appointment_date = req.body.appointment_date;
           appt.appointment_time = req.body.appointment_time;
           appt.action = req.body.action;

           appt.save()
            .then(appt => {
                res.redirect(`/appointments/dashboard`);
            })
            .catch(e => {
                res.redirect('/');
            });

        });
});

// @route     POST
// @desc      Delete an appointment
// @access    Private
router.delete('/edit/:id', (req, res) => {
    Appointment.deleteOne({ _id: req.params.id })
        .then(() => {
            res.redirect('/appointments/dashboard');
        })
        .catch(e => {
            res.redirect('/');
        });
})

module.exports = router;
