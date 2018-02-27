'use strict';

var rp = require('request-promise');

var MPU_6050 = require('./device/sensor/mpu-6050');

var mpu6050 = new MPU_6050();
mpu6050.setSleep(false).then(function () {
  return mpu6050.read();
}).then(function (bytes) {
  var local = require('./conf/cloud').local;

  return rp({
    method: 'POST',
    uri: local + '/mpu6050',
    body: { values: Array.prototype.slice.call(bytes, 0) },
    json: true,
    rejectUnauthorized: false,
  });
  console.log(bytes);
}).then(function (r) {
  console.log(r);
});
