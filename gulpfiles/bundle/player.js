var base = require('./base');

var config = {
  entries: ["./lib/js/player/App.js"],
  dest: "./public/js",
  filename: "player.js",
  paths: [
    "./lib/js/player",
  ]
};

module.exports = base(config);
