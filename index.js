
var slice = Array.prototype.slice;

var severityLevels = {
  EMERGENCY: {
    aliases: ['emergency', 'emerg', 'panic']
  },
  ALERT: {
    aliases: ['alert']
  },
  CRITICAL: {
    aliases: ['critical', 'crit']
  },
  ERROR: {
    aliases: ['error', 'err']
  },
  WARNING: {
    aliases: ['warning', 'warn']
  },
  NOTICE: {
    aliases: ['notice']
  },
  INFORMATIONAL: {
    aliases: ['informational', 'info']
  },
  DEBUG: {
    aliases: ['debug']
  }
};

function Logger (stream, namespace) {
  if (!(this instanceof Logger)) {
    return new Logger(stream, namespace);
  }
  if (!stream || typeof stream.write !== 'function') {
    throw new TypeError('Logger expects a writable stream instance');
  }

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
    defineMethod(alias, severity);
  });
});

module.exports = Logger;
