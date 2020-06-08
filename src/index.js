const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

app.set('port', process.env.PORT || 2000)
require('./sockets')(io);


console.log();

app.use(express.static(path.join(__dirname, 'public')));
server.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
})