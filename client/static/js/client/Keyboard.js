var _ = require('lodash');
var $ = require('jquery');
var Keymaster = require('keymaster');
var Sound = require('Sound');

var local = window;
var keys = [];

var Keyboard = {

  setup: function(arr) {

    _.forEach(arr, function(key) {
      Keyboard.createKeyboard(key);
    });

    local.addEventListener('keydown', function(e) {
      var code = e.keyCode || e.which;
      code = String.fromCharCode(code);
      _.some(arr, function(key) {
        if (String(code).toLowerCase() === key) {
          Sound.play(key);
          $('.' + key).addClass('pressed');
          return true;
        }

        return false;
      });
    });

    local.addEventListener('keyup', function(e) {
      var code = e.keyCode || e.which;
      code = String.fromCharCode(code);
      _.some(arr, function(key) {
        if (String(code).toLowerCase() === key) {
          $('.' + key).removeClass('pressed');
          return true;
        }
        return false;
      });
    });

  },

  createKeyboard: function(key) {
    var container = $('#keyboard');
    var keyboard = $("<kbd />", {
      class: key,
      text: key
    }).appendTo(container);
  }

};

module.exports = Keyboard;
