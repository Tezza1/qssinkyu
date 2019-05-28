const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true
    },
    appointment_date: {
        type: String,
        required: true
    },
    appointment_time: {
        type: String,
        required: true
    },
    client: {
        type: String,
        enum: ['New', 'Old'],
    },
    action: {
        type: String,
        enum: ['Not Started', 'Contacted', 'Completed'],
        'default': 'Not Started',
    },
    date: {
        type: Date,
        'default': Date.now
    }
});

mongoose.model('appointments', appointmentSchema);