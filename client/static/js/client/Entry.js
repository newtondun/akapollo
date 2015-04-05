var $ = require('jquery');
var _ = require('lodash');
var API = require('API');
var Keyboard = require('Keyboard');
var Sound = require('Sound');

var local = window;

local.addEventListener('load', function() {

  var keys = [],
      sounds = [];

  API.get('/loop', 'json', function(res) {

    keys = _.pluck(res, 'key');
    sounds = _.map(res, function(obj) {
      return {
        url: obj.url,
        key: obj.key
      };
    });

    Keyboard.setup(keys);
    Sound.setup(sounds);

  });

}, false);
