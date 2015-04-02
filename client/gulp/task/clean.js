var config = require('../config/clean');
var del = require('del');
var gulp = require('gulp');

gulp.task('clean:css', function() {
  del(config.production.css);
});

gulp.task('clean:map', function() {
  del(config.production.map);
});

gulp.task('clean:js', function() {
  del(config.production.js);
});

gulp.task('clean', ['clean:css', 'clean:map', 'clean:js']);
