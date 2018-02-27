var express = require('express');
var router = express.Router();

var db = require('../db/db');

router.get('/', function (req, res, next) {
  db.Mpu6050.findOne({}).then(function (m) {
    res.json({ data: m });
  });
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  db.Mpu6050.findOrCreate({ where: {}, defaults: {} }).then(function (ms) {
    if (req.body.values) {
      return ms[0].update({ values: req.body.values });
    }
  }).then(function () {
    return db.Mpu6050.findOne({});
  }).then(function (m) {
    res.json({ data: m });
  });
});

module.exports = router;
