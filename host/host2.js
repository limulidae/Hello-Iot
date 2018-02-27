'use strict';

var cloud = require('./conf/cloud');
var LCD = require('lcdi2c');
var net = require('net');
var rp = require('request-promise');

var lcd = new LCD(1, 0x3f, 16, 2);
lcd.clear();

var polling = function () {
  setInterval(function () {
    var server = cloud.local;
    return rp({
      method: 'GET',
      uri: server + '/mpu6050',
      json: true,
    }).then(function (r) {
      var values = r.data.values;
      var now = new Date().toTimeString();
      lcd.println(values[0] + ',' + values[1] + ',' + values[2], 1);
      lcd.println(now, 2);
    });
  }, 3000);
};

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
  lcd.println(values[0] + ',' + values[1] + ',' + values[2], 1);
  lcd.println(now, 2);
});
client.on('close', function () {
  console.log('Connection closed');
});

//polling();