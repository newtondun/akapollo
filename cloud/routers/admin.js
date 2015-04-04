var app = require('cloud/app');

var views = {
  dashboard: 'admin/dashboard',
  upload: 'admin/upload'
};

app.use('/admin', function(req, res) {
  if (!req.AV.user) {
    return res.redirect('/login');
  }
  res.redirect('/admin/dashboard');
});

app.get('/admin/dashboard', function(req, res) {
  if (!req.AV.user) {
    return res.redirect('/login');
  }

  var data = [];

  AV.Cloud.run('GetLoop', null, {
    success: function(result) {
      data = result;
      res.render(views.dashboard, {
        data: data
      });
    },
    error: function(error) {
      console.log(error);
    }
  });
});

app.get('/admin/upload', function(req, res) {
  if (!req.AV.user) {
    return res.redirect('/login');
  }

  res.render(views.upload);
});
