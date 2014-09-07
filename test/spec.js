/*global describe, it */

var Logger = require('../');
var expect = require('chai').expect;
var FakeStream = require('./FakeStream');

var methods = [
  'emergency',
  'alert',
  'critical',
  'error',
  'warning',
  'notice',
  'informational',
  'debug',
  'emerg',
  'panic',
  'crit',
  'err',
  'warn',
  'info',
  'log'
];

describe.skip('Specification:', function () {
  describe('Internal log object', function () {
    methods.forEach(function(method){
      it('must contain required fields on calling "'+method+'"', function (cb) {
        var logger = new Logger(new FakeStream(function (obj) {

          expect(obj).to.have.property('timestamp')
            .that.is.an('date');
          expect(obj).to.have.property('arguments')
            .that.is.an('array');
          expect(obj).to.have.property('severity')
            .that.is.an('number');
          expect(obj).to.have.property('namespace')
            .that.is.an('string');

          cb();
        }));
        logger[method]();
      });
    });
  });
});
