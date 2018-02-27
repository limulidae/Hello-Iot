"use strict";

var net = require('net');
var config = require('./conf/cloud');
var server = net.createServer(function (socket) {
  socket.write('Echo server ' + socket.remoteAddress + ',' + socket.remotePort + '\r\n');
  socket.pipe(socket);
});
server.listen(config.echo.port);