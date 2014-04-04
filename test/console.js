/*global describe, it */

var Logger = require('../');
var expect = require('chai').expect;
var FakeStream = require('./FakeStream');


describe('Console methods:', function () {
  describe('Logger instance', function () {
    it('should respond to "log"', function () {
      var logger = new Logger(new FakeStream());
        expect(logger).to.respondTo('log');
    });
  });
});
