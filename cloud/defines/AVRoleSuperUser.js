AV.Cloud.define('AddRoleSuperUser', function(request, response) {
  var roleACL = new AV.ACL();
  roleACL.setPublicReadAccess(true);
  var role = new AV.Role("SuperUser", roleACL);
  role.save();
});
