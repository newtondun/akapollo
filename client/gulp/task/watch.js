var config = require('../config/watch');
var gulp = require('gulp');

gulp.task('watch', ['watchify', 'sound', 'stylus'], function() {
  gulp.watch(config.sound, ['sound']);
  gulp.watch(config.style, ['stylus']);
});
