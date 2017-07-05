var express = require('express');
var app = express();

//static file
app.use(express.static('public'));

app.listen('3000');
console.log('Listening to port');