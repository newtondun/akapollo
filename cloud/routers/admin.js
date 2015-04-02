var app = require('cloud/app');

app.use('/admin', function(req, res) {
  if (!req.AV.user) {
    return res.redirect('/login');
  }
  res.redirect('/admin/dashboard');
});

app.get('/admin/dashboard', function(req, res) {
  res.render('admin');
});

app.get('/admin/upload', function(req, res) {
  if (!req.AV.user) {
    return res.redirect('/login');
  }
  res.render('admin/upload');
});
