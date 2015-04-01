var express = require('express');
var app = express();

app.set('views','cloud/views');
app.set('view engine', 'jade');
app.use(express.bodyParser());

var index = require('cloud/routes/index');
app.get('/', index);

var player = require('cloud/routes/player');
app.get('/player', player);

var about = require('cloud/routes/about');
app.get('/about', about);

app.listen();
