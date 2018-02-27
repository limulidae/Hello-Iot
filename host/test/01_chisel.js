"use strict";

var rp = require('request-promise');
var should = require('should');

var chisel = require('../conf/chisel');

//
// ./chisel client -v 104.198.105.52:8080 1337
//

describe('chisel tunnel', function () {
  it('typicode', function (done) {
    rp({
      method: 'GET',
      uri: 'http://localhost:4444/foo/bar',
      body: {},
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
