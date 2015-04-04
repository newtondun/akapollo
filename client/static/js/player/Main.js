var _ = require('lodash');
var $ = require('jquery');
var SoundManager = require('SoundManager');

$(function() {
  var Sound = new SoundManager();

  Sound.setup();
});
