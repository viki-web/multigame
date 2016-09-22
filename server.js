var express = require('express');
var socketIO = require('socket.io');
var path = require('path');
var app = express();
var http = require('http');
var PORT = process.env.PORT || 3000;
var server = http.createServer(app)
var io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, function () {
    console.log('Express server listening on port %d in %s mode', PORT);
});

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
