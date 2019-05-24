const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

const app = express();

// Load routes
// TODO: This must come at top of file or causes error
const users = require('./routes/users');
const inquiries = require('./routes/inquiries');
const appointments = require('./routes/appointments');

// ---------- CONNECTION TO MONGODB ----------
/*
Username: admin
Password: admin12
Connection string: mongodb+srv://admin:<password>@cluster0-h3shv.mongodb.net/test?retryWrites=true
*/

// Connect to database
mongoose.Promise = global.Promise;
const db = require('./config/database');
mongoose.connect(db.mongoURI,  {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// ---------- MIDDLEWARE ----------

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport config file
require('./config/passport')(passport);

// Sessions
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// http://www.passportjs.org/docs/configure
app.use(passport.initialize());
app.use(passport.session());


// ---------- ROUTES ----------



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