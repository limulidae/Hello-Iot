"use strict";

var conf = require('../conf/db')[process.env.NODE_ENV || 'development'];
var Sequelize = require('sequelize');

var sequelize = new Sequelize(conf.connection, { logging: false });

var Mpu6050 = sequelize.define('Mpu6050', require('./models/Mpu6050'), { underscored: true });

var init = function () {
};

var db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  init: init,

  Mpu6050: Mpu6050,
};

module.exports = db;