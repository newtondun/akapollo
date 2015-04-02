var _ = require('lodash-node');
var browserify = require('browserify');
var browserifyConfig = require('../config/browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var log = require('../util/log');
var mergeStream  = require('merge-stream');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var watchify = require('watchify');

var browserifyTask = function(dev) {

  var browserifyThis = function(cfg) {

    var config = cfg;

    if (dev) {
      _.extend(config, watchify.args, { debug: true });
    }

    var b = browserify(config);

    if (dev) {
      log.watch(config.filename);
      b = watchify(b);
      b.on('update', function() {
        bundle();
      });
    }

    function bundle() {
      log.start(config.filename);

      return b
        .bundle()
        .on('error', log.error)
        .pipe(source(config.filename))
        .pipe(dev ? util.noop() : buffer())
        .pipe(dev ? util.noop() : uglify())
        .pipe(gulp.dest(config.dest));
    }

    return bundle();

  };

  return mergeStream.apply(gulp, _.map(browserifyConfig.libs, browserifyThis));
};

gulp.task('browserify', function() {
  return browserifyTask(false);
});

gulp.task('watchify', function() {
  return browserifyTask(true);
});

module.exports = browserifyTask;
