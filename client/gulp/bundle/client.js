var base = require('./base');

var config = {
  entries: [
    "./client/static/js/client/Entry.js"
  ],
  dest: "./public/js",
  filename: "client.js",
  paths: [
    "./client/static/js/client"
  ]
};

module.exports = base(config);
