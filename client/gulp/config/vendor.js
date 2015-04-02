var src = './client/static/js/vendor/';

var config = {
  entires: src + '/**/*.js',
  options: [
    src + 'lodash.js',
    src + 'three.js',
    src + 'two.js'
  ],
  output: {
    dest: './public/js',
    filename: 'vendor.js'
  }
};

module.exports = config;
