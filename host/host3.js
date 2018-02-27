'use strict';

var cloud = require('./conf/cloud');
var net = require('net');
var rp = require('request-promise');

// try bind socket first
var client = new net.Socket();
client.connect(cloud.localSocket.port, cloud.localSocket.address, function () {
  console.log('Connected');
});
client.on('data', function (data) {
  console.log('Received: ' + data);
  var obj = JSON.parse(data);
  var values = obj.values;
  var now = new Date().toTimeString();
});
client.on('close', function () {
  console.log('Connection closed');
});
