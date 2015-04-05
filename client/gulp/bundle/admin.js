var base = require('./base');

var config = {
  entries: [
    "./client/static/js/admin/Entry.js"
  ],
  dest: "./public/js",
  filename: "admin.js",
  paths: [
    "./client/static/js/admin"
  ]
};

module.exports = base(config);
