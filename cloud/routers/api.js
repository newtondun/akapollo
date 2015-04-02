var app = require('cloud/app');

app.post('/signin', function(req, res) {
  var User = {
    username: req.body.username,
    password: req.body.password
  };

  AV.Cloud.run('SignIn', User, {
    success: function() {
      res.redirect('/admin');
    },
    error: function() {
      res.redirect('/login');
    }
  });
});
