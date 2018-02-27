"use strict";

var rp = require('request-promise');
var should = require('should');

var typicode = 'https://jsonplaceholder.typicode.com';

var proxies = require('../conf/proxy');

describe('no proxy', function () {
  it('typicode', function (done) {
    rp({
      method: 'GET',
      uri: typicode + '/posts/1',
      body: {},
      json: true
    }).then(function (jres) {
      //console.log(jres);
      jres.id.should.equal(1);
      done();
    }).catch(function (err) {
      console.log(err.error);
    });
  });
});

describe('AWS proxy #1', function () {
  /*
  it('msn.com', function (done) {
    rp.defaults({
      proxy: proxies.aws1.uri,
      strictSSL: false
    }).get('http://msn.com').then(function (jres) {
      console.log(jres);
      done();
    }).catch(function (err) {
      console.log(err.error);
    });
  });
  */

  it('typicode', function (done) {
    rp.defaults({
      proxy: proxies.aws1.uri,
      strictSSL: false
    }).get({
      uri: typicode + '/posts/1',
      body: {},
      json: true,
      rejectUnauthorized: false,
    }).then(function (jres) {
      //console.log(jres);
      jres.id.should.equal(1);
      done();
    }).catch(function (err) {
      console.log(err.error);
    });
  });
});

describe('HP proxy', function () {
  /*
  it('msn.com', function (done) {
    rp.defaults({
      proxy: proxies.aws1.uri,
      strictSSL: false
    }).get('http://msn.com').then(function (jres) {
      console.log(jres);
      done();
    }).catch(function (err) {
      console.log(err.error);
    });
  });
  */

  it('typicode', function (done) {
    rp.defaults({
      proxy: proxies.hp.uri,
      strictSSL: false
    }).get({
      uri: typicode + '/posts/1',
      body: {},
      json: true,
      rejectUnauthorized: false,
    }).then(function (jres) {
      //console.log(jres);
      jres.id.should.equal(1);
      done();
    }).catch(function (err) {
      console.log(err.error);
    });
  });
});
