/*global describe, it */

var Logger = require('../');
var expect = require('chai').expect;
var FakeStream = require('./FakeStream');


describe('Addition:', function () {
  describe('Logger instance', function () {
    it('should respond to "write"', function () {
      var logger = new Logger(new FakeStream());
        expect(logger).to.respondTo('write');
    });
  });
});
