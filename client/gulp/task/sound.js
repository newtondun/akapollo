var config = require('../config/sound');
var gulp = require('gulp');

gulp.task('sound', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
