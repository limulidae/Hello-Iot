'use strict';

var bluebird = require('bluebird');
var i2c = require('i2c');

class I2C_DEVICE {
  constructor(address, device) {
    this.i2c_address = address;
    this.i2c_device = device;
    this.wire = new i2c(this.i2c_address, { device: this.i2c_device });
  }

  readBytes(command, length) {
    var f = bluebird.promisify(this.wire.readBytes, { context: this.wire });
    return f(command, length);
  }

  writeBytes(command, bytes) {
    var f = bluebird.promisify(this.wire.writeBytes, { context: this.wire });
    return f(command, bytes);
  }
}

var ADDRESS = 0x68;
var DEVICE = '/dev/i2c-1';

class MPU_6050 extends I2C_DEVICE {
  constructor() {
    super(ADDRESS, DEVICE);
  }

  read(f) {
    return this.readBytes(0x3B, 14);
  }

  setSleep(s) {
    return this.readBytes(0x6B, 1).then(function (bytes) {
      var b = bytes[0];
      if (s) {
        b |= 0x40; // set SLEEP
      } else {
        b &= 0xBF; // clear SLEEP        
      }
      return b;
    }).then(function (b) {
      return this.writeBytes(0x6B, [b]);
    }.bind(this)).then(function () {
      return this.readBytes(0x6B, 1);
    }.bind(this)).then(function (bytes) {
      console.log('PWR_MGMT_1 = ', bytes);
    });
  }
}

module.exports = MPU_6050;