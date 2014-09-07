# Mag logger facade [![Build Status](https://travis-ci.org/mahnunchik/mag-logger-facade.svg)](https://travis-ci.org/mahnunchik/mag-logger-facade)

Logger facade provides a simplified interface to various logging mechanism.

This module is used by [mag](https://github.com/mahnunchik/mag) logger.

Logger:

* Should respond to methods named by syslog severity levels
* Should respond to methods named by syslog shortcut severity lavels
* Should respond to `log` method

## Specification

Specification of internal log messages can be found here: [SPEC.md](https://github.com/mahnunchik/mag-logger-facade/blob/master/SPEC.md)

## API

### Logger(stream, namespace)

Logger facade constructor

#### Params:

* **[WritableStream](http://nodejs.org/api/stream.html#stream_class_stream_writable)** *stream* - destination for logs
* **String** *namespace* - tag for each log object

### log(...any)

Method for consistency to standart [console](http://nodejs.org/api/console.html#console_console_log_data) object

#### Params:

* **...any** *data* - all arguments will be passed to log object

### emergency(...any)

##### aliases: `emerg`, `panic`

Use cases: Your application is completely broken. If you sleep, you must wake up and begin to repair your application.

#### Params:

* **...any** *data* - all arguments will be passed to log object

### alert(...any)

Use cases: Your application does not work. If you going to go to bed, you should not do this, you must begin to repair your application.

#### Params:

* **...any** *data* - all arguments will be passed to log object

### critical(...any)

##### alias: `crit`

Use cases: Your application is running, but can be broken soon. If you eat, you should do it quickly and begin to repair your application.

#### Params:

* **...any** *data* - all arguments will be passed to log object

### error(...any)

##### alias: `err`

Use cases: Your application is running, but something bad happened. You must add the task "fix the bug" to your to-do list.

#### Params:

* **...any** *data* - all arguments will be passed to log object

### warning(...any)

##### alias: `warn`

Use cases: Your application is running, but soon you may see error messages. You should add the task "fix the bug" to your to-do list.

#### Params:

* **...any** *data* - all arguments will be passed to log object

### notice(...any)

Use cases: Your application is running, but something unusual happened. You have to think about it in your spare time.

#### Params:

* **...any** *data* - all arguments will be passed to log object

### informational(...any)

##### alias: `info`

Use cases: Your application works fine. These messages show how well.

#### Params:

* **...any** *data* - all arguments will be passed to log object

### debug(...any)

Use cases: You can use it during development. And do not use in production environment.

#### Params:

* **...any** *data* - all arguments will be passed to log object


## License

[MIT](https://github.com/mahnunchik/mag-logger-facade/blob/master/LICENSE)
