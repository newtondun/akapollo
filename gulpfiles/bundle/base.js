var _ = require('lodash-node');

var baseConfig = {
  extensions: [
    ".coffee",
    ".js",
    ".json",
    ".jsx"
  ],
  paths: [
    "./lib/js/common"
  ]
};

var merge = function(config) {
  return _.merge(config, baseConfig, function(a, b) {
    if (_.isArray(a)) {
      return a.concat(b);
    }
  });
};

module.exports = merge;
