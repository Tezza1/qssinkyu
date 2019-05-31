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
    const newInquiry = {
                name: req.body.name,
                email: req.body.email,
                telephone: req.body.telephone,
                message: req.body.message,
            };
            new Inquiry(newInquiry)
                .save()
                .then(idea => {
                    res.redirect(`/`);
                })
                .catch(e => {
                    res.redirect('/');
                });
});


// ---------- ADMIN LOOKING AT INQUIRY ----------

// @route     GET
// @desc      Add an inquiry
// @access    Private
router.get('/dashboard', (req, res) => {
    Inquiry.find()
        .sort({ date: 'desc' })
        .then(inq => {
            res.render('inquiry/dashboard', {
                inqs: inq
            });
        })
        .catch(e => {
            res.redirect('/');
        });
});

// @route     GET
// @desc      Edit an inquiry
// @access    Private
router.get('/edit/:id', (req, res) => {
    Inquiry.findOne({
            _id: req.params.id
        })
            .then(inq => {
                res.render('inquiry/edit', {
                    errors: null,
                    inq
                });
            })
            .catch(e => {
                res.redirect('/');
            });
});

// @route     PUT
// @desc      Edit an inquiry
// @access    Private
router.put('/edit/:id', (req, res) => {
    Inquiry.findOne({ _id: req.params.id })
        .then(inq => {
           inq.name = req.body.name;
           inq.email = req.body.email;
           inq.telephone = req.body.telephone;
           inq.message = req.body.message;
           inq.notes = req.body.notes;
           inq.action = req.body.action;

           inq.save()
            .then(inq => {
                res.redirect(`/inquiries/dashboard`);
            })
            .catch(e => {
                res.redirect('/');
            });

        });
});

// @route     DELETE
// @desc      Delete an inquiry
// @access    Private
router.delete('/edit/:id', (req, res) => {
    Inquiry.deleteOne({ _id: req.params.id })
        .then(() => {
            res.redirect('/inquiries/dashboard');
        })
        .catch(e => {
            res.redirect('/');
        });
})

module.exports = router;
