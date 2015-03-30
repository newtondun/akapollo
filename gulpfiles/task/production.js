var gulp = require('gulp');

gulp.task('production', [
  'clean',
  'sound',
  'minify',
  'vendor',
  'browserify'
]);
