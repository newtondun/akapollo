AV.Cloud.define('SignIn', function(request, response) {
  var username = request.params.username;
  var password = request.params.password;

  AV.User.logIn(username, password, {
    success: function(user) {
      response.success(user);
    },
    error: function(user, error) {
      response.error(error);
    }
  });
});
