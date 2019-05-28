const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let inquirySchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: true
    },
    notes: {
        type: String
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

mongoose.model('inquiries', inquirySchema);