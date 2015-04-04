var $ = require('jquery');
var DashboardModify = {};

DashboardModify.update = function(id, key) {
  $.ajax({
    url: '/loop/update',
    method: 'POST',
    data: {
      'id': id,
      'key': key
    },
    dataType: 'json'
  })
  .done(function(res) {
    console.log(res);
    window.location.reload();
  })
  .fail(function(res) {
    console.log(res);
  });
};

DashboardModify.delete = function(id) {
  var Confirm = confirm("DELETE?!");

  if (Confirm) {
    $.ajax({
      url: '/loop/delete',
      method: 'POST',
      data: {
        'id': id
      },
      dataType: 'json'
    })
    .done(function(res) {
      console.log(res);
      window.location.reload();
    })
    .fail(function(res) {
      console.log(res);
    });
  }

};

module.exports = DashboardModify;
