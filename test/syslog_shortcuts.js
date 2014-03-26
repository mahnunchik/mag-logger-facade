/*global describe, it */

var Logger = require('../');
var expect = require('chai').expect;
var FakeStream = require('./FakeStream');

var syslogShortcuts = {
  'emergency': ['emerg', 'panic'],
  'critical': ['crit'],
  'error': ['err'],
  'warning': ['warn'],
  'informational': ['info']
};

describe('Shortcut aliases of SysLog methods:', function () {
  describe('Logger instance', function () {
    Object.keys(syslogShortcuts).forEach(function(method){
      syslogShortcuts[method].forEach(function(alias){
        it('should respond to "'+alias+'" alias of "'+method+'"', function () {
          var logger = new Logger(new FakeStream());
          expect(logger).to.respondTo(alias);
        });
      });
    });
  });
});
