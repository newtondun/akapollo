var $ = require('jquery');
var _ = require('lodash');
var API = require('API');

var local = window,
    AudioContext,
    AudioBuffer = {},
    ctx, analyser, callbacks = [];

AudioContext = local.AudioContext || local.webkitAudioContext;

var Sound = {

  setup: function(arr) {

    try {
      ctx = new AudioContext();
    } catch (e) {
      return console.warn('Sorry, Your Browser is not Supported for AudioContext');
    }

    _.forEach(arr, function(obj) {
      Sound.getAudio(obj.url, obj.key);
    });

  },

  getAudio: function(url, key) {

    API.get(url, 'arraybuffer', function(res) {
      ctx.decodeAudioData(res, function(buffer) {
        Sound.resolveAudio(buffer, key);
      }, onDecodeError);
    });

  },

  resolveAudio: function(buffer, key) {

    if (AudioBuffer.hasOwnProperty(key)) {
      return console.warn('Duplicated Key');
    }

    var source = ctx.createBufferSource();
    source.buffer = buffer;
    source.start = source.start || source.noteOn;

    AudioBuffer[key] = source;

  },

  stop: function(key) {

    var source = AudioBuffer[key];

    source.stop(0);

  },

  play: function(key) {

    if (!AudioBuffer.hasOwnProperty(key)) {
      return console.warn('Wrong Key');
    }

    var source = AudioBuffer[key];

    if (source.hasOwnProperty('buffer')) {
      source = ctx.createBufferSource();
      source.buffer = AudioBuffer[key].buffer;
      source.connect(ctx.destination);
    }

    source.start(0, 0);

  }

};

function onDecodeError(error) {
  console.warn(error);
}

module.exports = Sound;
