var express = require('express'),
    app = require('cloud/app'),
    cookie = require('avos-express-cookie-session');

app.use(express.cookieParser('AKAPOLLO'));
app.use(cookie({
  cookie: {
    maxAge: 3600000
  },
  fetchUser: true
}));
