"use strict";

var rp = require('request-promise');
var should = require('should');

describe('POST', function () {
  it('/mpu6050', function (done) {
    rp({
      method: 'POST',
      uri: 'http://localhost:3000/mpu6050',
      body: { values: [1, 2, 3, 4, 5] },
      json: true,
      rejectUnauthorized: false,
      strictSSL: false,
      tunnel: true,
    }).then(function (jres) {
      console.log('a', jres);
      //jres.id.should.equal(1);
      done();
    }).catch(function (err) {
      console.log('b', err);
    });
  });
});
