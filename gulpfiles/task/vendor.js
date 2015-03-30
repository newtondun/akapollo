var concat = require('gulp-concat');
var config = require('../config/vendor');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('vendor:entires', function() {
  gulp.src(config.entires)
    .pipe(concat(config.output.filename))
    .pipe(uglify())
    .pipe(gulp.dest(config.output.dest));
});

gulp.task('vendor:options', function() {
  gulp.src(config.options)
    .pipe(concat(config.output.filename))
    .pipe(uglify())
    .pipe(gulp.dest(config.output.dest));
});

gulp.task('vendor', ['vendor:options']);
