// Require
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const layouts = require('express-ejs-layouts');
<<<<<<< HEAD
const session = require('express-session')
const flash = require('connect-flash');
=======
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
>>>>>>> submain
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const app = express();

// Middleware
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
<<<<<<< HEAD
}))

=======
}));
>>>>>>> submain
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());


<<<<<<< HEAD
=======
// before every route, attach the flash messages and current user to res.locals
>>>>>>> submain
app.use((req, res, next) => {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

<<<<<<< HEAD

// routes 
=======
// Routes
>>>>>>> submain
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});


// Use routes
app.use('/auth', require('./routes/auth'));
// app.use('/search', require('./routes/search'));
// app.use('/dashboard', isLoggedIn, require('./routes/dashboard'))

// Server
var server = app.listen(process.env.PORT || 3000, () => console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 3000}🎧`));

module.exports = server;
