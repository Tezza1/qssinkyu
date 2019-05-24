const express = require('express');
const mongoose = require('mongoose');

const app = express();

// ---------- CONNECTION TO MONGODB ----------
/*
Username: admin
Password: admin12
Connection string: mongodb+srv://admin:<password>@cluster0-h3shv.mongodb.net/test?retryWrites=true
*/

// Connect to database
// mongoose.Promise = global.Promise;
const db = require('./config/database');
mongoose.connect(db.mongoURI,  {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


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