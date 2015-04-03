AV.Cloud.define('SignUp', function(request, response) {

  var _ = require('lodash-node');

  if (_.isEmpty(request.params)) {
    return response.error('Invalid Username or Password');
  }

  var user = new AV.User();

  user.set('username', request.params.username);
  user.set('password', request.params.password);
  user.set('email', request.params.email);
  user.set('mobilePhoneNumber', request.params.mobile);

  user.signUp(null, {
    success: function(user) {
      response.success('New User: ' + request.params.username + ' is sign up!');
    },
    error: function(user, error) {
      response.error("Error: " + error.code + " " + error.message);
    }
  });

});
