var _ = require('lodash-node'),
    app = require('cloud/app'),
    fs = require('fs');

app.get('/login', function(req, res) {
  res.render('admin/login');
});

app.get('/logout', function(req, res) {
  AV.User.logOut();
  res.redirect('/login');
});

app.post('/signin', function(req, res) {
  var data = {
    username: req.body.username,
    password: req.body.password
  };

  AV.Cloud.run('SignIn', data, {
    success: function() {
      res.redirect('/admin');
    },
    error: function() {
      res.redirect('/login');
    }
  });
});

app.post('/loop/upload', function(req, res) {

  var Music = req.files.music;
  var Key = String(req.body.key).toLowerCase();

  if (!_.isEmpty(Music) && !_.isEmpty(Key)) {
    fs.readFile(Music.path, function(err, data) {

      if (err) {
        return res.send({ message: 'Failed to Read Files' });
      }

      var base64Data = data.toString('base64');
      var MusicFile = new AV.File(Music.name, {
        base64: base64Data
      });

      MusicFile.save().then(function(MusicFile) {
        var Loop = new AV.Object('Loop');
        Loop.set('name', Music.name);
        Loop.set('key', Key);
        Loop.set('file', MusicFile);
        Loop.save(null, {
          success: function() {
            res.send('Upload Success');
          },
          error: function(error) {
            res.send({ message: error });
          }
        });
      }, function(error) {
        res.send({ message: error });
      });

    });
  } else {
    res.send({ message: 'Please Select one Files' });
  }
});

app.post('/loop/update', function(req, res) {

  if (_.isEmpty(req.body)) {
    return res.send('Empty Params');
  }

  var data = {
    id: req.body.id,
    key: req.body.key
  };

  AV.Cloud.run('PutLoop', data, {
    success: function() {
      var response = {
        status  : 200,
        success : 'Updated Successfully'
      };

      res.end(JSON.stringify(response));
    },
    error: function(error) {
      res.send(error);
    }
  });

});

app.post('/loop/delete', function(req, res) {

  if (_.isEmpty(req.body)) {
    return res.send('Empty Params');
  }

  var data = {
    id: req.body.id,
  };

  AV.Cloud.run('DeleteLoop', data, {
    success: function() {
      var response = {
        status  : 200,
        success : 'Updated Successfully'
      };

      res.end(JSON.stringify(response));
    },
    error: function(error) {
      res.send(error);
    }
  });

});
