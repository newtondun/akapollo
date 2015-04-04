AV.Cloud.define('SignIn', function(req, res) {
  var username = req.params.username;
  var password = req.params.password;

  AV.User.logIn(username, password, {
    success: function(user) {
      res.success(user);
    },
    error: function(user, error) {
      res.error(error);
    }
  });
});
