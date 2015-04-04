var app = require('cloud/app');

app.get('/', function(req, res) {
  res.render('client');
});

app.get('/player', function(req, res) {
  res.render('client/player');
});

app.get('/about', function(req, res) {
  res.render('client/about', contents());
});

function contents() {
  return {
    benjamin: 'benjamin',
    newton: 'newton',
    shawn: 'shawn'
  };
}
