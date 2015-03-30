var config = {
  entires: "./lib/js/vendor/**/*.js",
  options: [
    './lib/js/vendor/lodash.js',
    './lib/js/vendor/three.js',
    './lib/js/vendor/two.js'
  ],
  output: {
    dest: './public/js',
    filename: 'vendor.js'
  }
};

module.exports = config;
