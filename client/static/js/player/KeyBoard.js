var keyMaster = require('keymaster');

var KeyBoard = function() {
  this._keys = [];
  this._choosedKeys = ['w', 's', 'a', 'd', 'h', 'j', 'k', 'l'];
  this._isBindSounds = false;
};

KeyBoard.prototype.bindKeys = function(sounds) {
  this._isBindSounds = true;
};

module.exports = KeyBoard;
