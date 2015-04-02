var app = require('cloud/app');

app.get('/admin', function(req, res) {
  if (req.AV.user) {
    res.render('admin');
  } else {
    res.redirect('/login');
  }
});

app.get('/login', function(req, res) {
  res.render('admin/login');
});
