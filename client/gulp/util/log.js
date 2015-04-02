var prettyHrtime = require('pretty-hrtime');
var util = require('gulp-util');

var startTime = '',
    endTime = '',
    duration = '';

var log = {
  start: function(path) {
    startTime = process.hrtime();
    util.log(util.colors.green(path), 'is bundling...');
  },

  end: function(path) {
    endTime = process.hrtime(startTime);
    duration = prettyHrtime(endTime);
    util.log(util.colors.green(path), 'is ended in', util.colors.magenta(duration));
  },

  watch: function(filename) {
    util.log(util.colors.yellow(filename), 'is watching, feel free to code');
  },

  error: function(error) {
    util.log('ERROR:', util.colors.red(error.message));
  }
};

module.exports = log;
