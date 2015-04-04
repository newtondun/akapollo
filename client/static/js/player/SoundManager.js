var _ = require('lodash');
var KeyBoard = require('KeyBoard');
var SoundManager = function() {};

SoundManager.prototype.setup = function() {
  this.getLoop();
};

SoundManager.prototype.getLoop = function() {
  var _this = this;
  $.ajax({
    url: '/loop/get',
    method: 'GET',
    dataType: 'json',
    success: function(res) {
      _this.resolveLoop(res.data);
    },
    error: function(res) {
      console.warn(res);
    }
  });
};

SoundManager.prototype.resolveLoop = function(data) {
  var sounds = [];

  if (_.isEmpty(data)) {
    return console.warn('loop data is empty');
  }

  sounds = _.map(data, function(sound) {
    var audio = new Audio(sound.url);
    return {
      key: sound.key,
      audio: audio
    };
  });

  var key = new KeyBoard();
  key.bindKeys(sounds);
};

module.exports = SoundManager;
