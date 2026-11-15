var express = require('express');
var router = express.Router();

// Routes follow WebProject and the course portfolio controller examples.
// res.render() combines the named EJS view with the values in the second argument.
router.get('/', function(req, res) {
  // Home includes the other three views; their individual GET routes remain below.
  res.render('pages/home', { title: 'Home', submitted: false, formError: '' });
});

router.get('/about', function(req, res) {
  res.render('pages/about', { title: 'About Me' });
});

router.get('/projects', function(req, res) {
  res.render('pages/projects', { title: 'Projects' });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact', { title: 'Contact Me', submitted: false, formError: '' });
});

// Like the course example, this only renders a response; it sends no email.
router.post('/contact', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  // Chapter 9 demonstrates checking for missing or empty form values.
  if (name == null || name == '' || email == null || email == '' || message == null || message == '') {
    res.status(400).render('pages/contact', {
      title: 'Contact Me', submitted: false, formError: 'Please complete all three fields.'
    });
  } else {
    res.render('pages/contact', {
      title: 'Contact Me', submitted: true, formError: '', name: name
    });
  }
});

module.exports = router;
