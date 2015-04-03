AV.Cloud.define('AddRoleNormalUser', function(request, response) {
  var roleACL = new AV.ACL();
  roleACL.setPublicReadAccess(true);
  var role = new AV.Role("Normal User", roleACL);
  role.save();
});
