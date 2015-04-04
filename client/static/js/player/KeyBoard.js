var _ = require('lodash');
var keyMaster = require('keymaster');

var KeyBoard = function() {
  this._keys = [];
  this._choosedKeys = ['w', 's', 'a', 'd', 'h', 'j', 'k', 'l'];
  this._isBindSounds = false;
};

KeyBoard.prototype.bindKeys = function(sounds) {

  var _this = this;

  if (_this._isBindSounds) {
    return console.warn('Keys are already Binded');
  }

  _.forEach(sounds, function(sound, index) {
    keyMaster(sound.key, function() {
      sound.audio.play();
    });
  });

};

module.exports = KeyBoard;
