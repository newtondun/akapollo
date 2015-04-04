var src = './client/static/styl/';
var client = src + 'client/';
var admin = src + 'admin/';

var config = {
  entries: [
    src + 'global.styl',
    client + 'client.styl',
    admin + 'admin.styl'
  ],
  output: './public/css'
};

module.exports = config;
