var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require("socket.io").listen(server);
var port = 3000

server.listen(port);
console.log('Listening on ' + port);

app.use('/public', express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

io.sockets.on('connection', (socket) => {
    socket.on('talking',  (data) => io.sockets.emit('listening', data))
});