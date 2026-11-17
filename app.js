// This loads the packages the website uses.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');

var app = express();

// This sets EJS as the template engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// This uses the shared layout from the course portfolio example.
app.use(expressLayouts);
app.set('layout', 'layout');

// This logs requests and reads incoming form data, JSON and cookies.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// This serves the images, stylesheets and scripts from public.
app.use(express.static(path.join(__dirname, 'public')));

// This connects the website routes.
app.use('/', indexRouter);

// This passes missing pages to the error handler.
app.use(function(req, res, next) {
  next(createError(404));
});

// This handles errors from the website.
app.use(function(err, req, res, next) {
  // Detailed errors are shown only in development.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // This displays the error page with its status code.
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

module.exports = app;
