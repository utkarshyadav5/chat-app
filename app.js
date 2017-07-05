var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();

//static files
app.use(express.static('public'));

var server = app.listen('3000');
console.log('Listening to port');

//Socket setup
var io = socket(server);

io.on('connection',function(socket){
    console.log('made socket connection',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });
});