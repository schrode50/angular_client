'use strict';

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/build'));

var server = app.listen(5000, () => {
  console.log('server running at %s', server.address().port);
});
