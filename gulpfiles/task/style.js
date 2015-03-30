var autoprefixer = require('gulp-autoprefixer');
var config = require('../config/style');
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var nib = require('nib');
var util = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');

var stylusTask = function(dev) {
  gulp.src(config.entries)
    .pipe(dev ? sourcemaps.init() : util.noop())
    .pipe(stylus({ use: nib() }))
    .pipe(autoprefixer({ browsers: [ 'last 2 versions' ] }))
    .pipe(dev ? util.noop() : minifyCSS())
    .pipe(dev ? sourcemaps.write('.') : util.noop())
    .pipe(gulp.dest(config.output));
};

gulp.task('stylus', function() {
  return stylusTask(true);
});

gulp.task('minify', function() {
  return stylusTask(false);
});
