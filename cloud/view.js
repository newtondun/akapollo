var express = require('express'),
    app = require('cloud/app');

app.set('views','cloud/views');
app.set('view engine', 'jade');
app.use(express.bodyParser());
