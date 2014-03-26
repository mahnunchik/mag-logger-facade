/*global describe, it */

var Logger = require('../');
var expect = require('chai').expect;
var FakeStream = require('./FakeStream');

var syslogMethods = [
  'emergency',
  'alert',
  'critical',
  'error',
  'warning',
  'notice',
  'informational',
  'debug'
];

describe('SysLog methods:', function () {
  describe('Logger instance', function () {
    syslogMethods.forEach(function(method){
      it('should respond to "'+method+'"', function () {
        var logger = new Logger(new FakeStream());
        expect(logger).to.respondTo(method);
      });
    });
  });
});
