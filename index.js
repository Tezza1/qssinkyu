const express = require("express");

const app = express();


// ---------- ROUTES ----------

// Load routes
const users = require('./routes/users');
const inquiries = require('./routes/inquiries');
const appointments = require('./routes/appointments');

// @route     GET
// @desc      Main info page
// @access    Public
app.get('/', (req, res) => {
    res.send("hello");
});

// Use routes
app.use('/users', users);
app.use('/inquiries', inquiries);
app.use('/appointments', appointments);

// set the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
})