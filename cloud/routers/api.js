var app = require('cloud/app'),
    fs = require('fs');

app.get('/login', function(req, res) {
  res.render('admin/login');
});

app.get('/logout', function(req, res) {
  AV.User.logOut();
  res.redirect('/login');
});

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

app.post('/upload', function(req, res){
  var Music = req.files.music;
  if(Music) {
    fs.readFile(Music.path, function(err, data){
      if(err) {
        return res.send('读取文件失败');
      }

      var base64Data = data.toString('base64');
      var MusicFile = new AV.File(Music.name, {
        base64: base64Data
      });

      MusicFile.save().then(function(MusicFile){
        res.send('上传成功！');
      });
    });
  } else {
    res.send('请选择一个文件。');
  }
});
