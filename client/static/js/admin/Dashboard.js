var $ = require('jquery');
var _ = require('lodash');
var DashboardModify = require('DashboardModify');

$(function() {
  $(document).on('click', '.update-loop', function(event) {
    var target = $(event.target);
    var id = target.data('id');
    var key = $('.key-loop').filter(function() {
      return $(this).data('id') === id;
    }).val();

    DashboardModify.update(id, key);
  });

  $(document).on('click', '.delete-loop', function(event) {
    var target = $(event.target);
    var id = target.data('id');

    DashboardModify.delete(id);
  });
});
