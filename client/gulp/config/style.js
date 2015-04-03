var src = './client/static/styl/';
var client = src + 'client/';

var config = {
  entries: [
    src + 'global.styl',
    client + 'client.styl'
  ],
  output: './public/css'
};

module.exports = config;
