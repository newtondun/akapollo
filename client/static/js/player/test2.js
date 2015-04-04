var $ = require('jquery');
var _ = require('lodash');
var key = require('keymaster');

var KEYS = ['w', 's', 'a', 'd', 'h', 'j', 'k', 'l'];
var SOUNDS = [];

$(function() {
  $.ajax({
    url: '/sounds',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      resolveSounds(response);
    },
    error: function(response) {
      console.warn(response);
    }
  });
});

function resolveSounds(data) {
  var sounds = data;

  if (_.isEmpty(data)) {
    return console.warn('/sounds data is empty');
  }

  SOUNDS = _.map(sounds, function(sound, index) {
    var audio = new Audio(sound.url);
    return audio;
  });

  bindKeys(SOUNDS);
}

function bindKeys(sounds) {
  _.forEach(sounds, function(sound, index) {
    key(KEYS[index], function() {
      sound.play();
    });
  });
}
