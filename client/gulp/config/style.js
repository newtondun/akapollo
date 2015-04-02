var src = './client/static/styl/';

var config = {
  entries: [
    src + 'global.styl',
    src + 'admin.styl',
    src + 'common.styl',
    src + 'index.styl',
    src + 'about.styl'
  ],
  output: './public/css'
};

module.exports = config;
