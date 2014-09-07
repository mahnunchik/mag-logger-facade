
/**
 * Logger facade provides a simplified interface to various logging mechanism.
 * This module is used by [mag](https://github.com/mahnunchik/mag) logger
 * @module Logger
 */

var slice = Array.prototype.slice;

/**
 * According [Spec](https://tools.ietf.org/html/rfc5424#page-11)
 */

var severityLevels = {
  EMERGENCY: {
    aliases: ['emergency', 'emerg', 'panic'],
    code: 0
  },
  ALERT: {
    aliases: ['alert'],
    code: 1
  },
  CRITICAL: {
    aliases: ['critical', 'crit'],
    code: 2
  },
  ERROR: {
    aliases: ['error', 'err'],
    code: 3
  },
  WARNING: {
    aliases: ['warning', 'warn'],
    code: 4
  },
  NOTICE: {
    aliases: ['notice'],
    code: 5
  },
  INFORMATIONAL: {
    aliases: ['informational', 'info'],
    code: 6
  },
  DEBUG: {
    aliases: ['debug'],
    code: 7
  }
};

/**
 * @constructs Logger
 * @param {WritableStream} stream - distantion to write log object
 * @param {String} namespace - tag for each log object
 */

function Logger (stream, namespace) {
  if (!(this instanceof Logger)) {
    return new Logger(stream, namespace);
  }
  if (!stream || typeof stream.write !== 'function') {
    throw new TypeError('Logger expects a writable stream instance');
  }

  namespace = namespace || '';

  Object.defineProperty(this, '_stream', {value: stream});
  Object.defineProperty(this, '_namespace', {value: namespace});

  Object.keys(Logger.prototype).forEach(function(key) {
    this[key] = this[key].bind(this);
  }, this);
}


function defineMethod(method, severity) {
  Logger.prototype[method] = function() {
    this._stream.write({
      arguments: slice.call(arguments),
      severity: severity,
      timestamp: new Date(),
      namespace: this._namespace
    });
  };
}

Object.keys(severityLevels).forEach(function(severity){
  severityLevels[severity].aliases.forEach(function(alias){
    defineMethod(alias, severityLevels[severity].code);
  });
});

/**
 * @deprecated since version 0.1.1
 * @param {string} str
 */

Logger.prototype.write = function(str) {
  str = str.replace(/\n$/, '');
  this._stream.write({
    arguments: [str],
    severity: severityLevels.INFORMATIONAL.code,
    timestamp: new Date(),
    namespace: this._namespace
  });
};

/**
 * @param {...any} data - data to log
 */

Logger.prototype.log = function() {
  this._stream.write({
    arguments: slice.call(arguments),
    severity: severityLevels.INFORMATIONAL.code,
    timestamp: new Date(),
    namespace: this._namespace
  });
};

module.exports = Logger;
