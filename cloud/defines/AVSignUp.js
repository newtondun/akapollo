AV.Cloud.define('SignUp', function(req, res) {

  var _ = require('lodash-node');

  if (_.isEmpty(req.params)) {
    return res.error('Invalid Username or Password');
  }

  var user = new AV.User();

  user.set('username', req.params.username);
  user.set('password', req.params.password);
  user.set('email', req.params.email);
  user.set('mobilePhoneNumber', req.params.mobile);

  user.signUp(null, {
    success: function(user) {
      res.success('New User: ' + req.params.username + ' is sign up!');
    },
    error: function(user, error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});
