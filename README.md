# Mag logger facade [![Build Status](https://travis-ci.org/mahnunchik/mag-logger-facade.svg)](https://travis-ci.org/mahnunchik/mag-logger-facade)

Logger facade provides a simplified interface to various logging mechanism.

This module is used by [mag](https://github.com/mahnunchik/mag) logger.

Logger:

* Should respond to methods named by syslog severity levels
* Should respond to methods named by syslog shortcut severity lavels
* Should respond to `log` method

## API

### Logger(stream, namespace)

Logger facade constructor

### Params:

* **[WritableStream](http://nodejs.org/api/stream.html#stream_class_stream_writable)** *stream* - destination for logs
* **String** *namespace* - tag for each log object

## License

MIT
