var base = require('./base');

var config = {
  entries: [
    "./client/static/js/player/Main.js"
  ],
  dest: "./public/js",
  filename: "player.js",
  paths: [
    "./client/static/js/player"
  ]
};

module.exports = base(config);
