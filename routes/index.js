var express = require('express');
var router = express.Router();

// Routes are adapted from WebProject and the course portfolio example.
// res.render() displays an EJS view and sends it values such as the page title.
// This route displays the scrolling Home page.
router.get('/', function(req, res) {
  // Home also includes About Me, Projects and Contact Me.
  res.render('pages/home', { title: 'Home', submitted: false, formError: '' });
});

// This route displays the separate About Me page.
router.get('/about', function(req, res) {
  res.render('pages/about', { title: 'About Me' });
});

// This route displays the separate Projects page.
router.get('/projects', function(req, res) {
  res.render('pages/projects', { title: 'Projects' });
});

// This route displays the Contact Me page before a form is submitted.
router.get('/contact', function(req, res) {
  res.render('pages/contact', { title: 'Contact Me', submitted: false, formError: '' });
});

// This handles the submitted form, like the course example; it sends no email.
router.post('/contact', function(req, res) {
  // req.body contains the information entered in the form.
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  // This checks for empty fields, adapted from the Chapter 9 example.
  if (name == null || name == '' || email == null || email == '' || message == null || message == '') {
    res.status(400).render('pages/contact', {
      title: 'Contact Me', submitted: false, formError: 'Please complete all three fields.'
    });
  } else {
    // This displays the confirmation and the visitor's name.
    res.render('pages/contact', {
      title: 'Contact Me', submitted: true, formError: '', name: name
    });
  }
});

module.exports = router;
