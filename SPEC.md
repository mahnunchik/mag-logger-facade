# Specification for the format of internal messages of mag logger

Version: 1.0

## Internal log message

Each internal log message is a plain JavaScript [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

The message must contain fields described below and can include any additional fields. Names of additional fields must not conflict with required fields and standard built-in methods and properties of Object.

## Required fields

### *timestamp* - **[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)**

The time when the log messages were called.

### *arguments* - **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

An array of original items for logging.

### *severity* - **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

The severity level of the message. According to the specification: [Syslog Message Severities](https://tools.ietf.org/html/rfc5424#page-11)

### *namespace* - **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

An arbitrary string identifier. Can be empty.

## Additional fields

You can add custom fields to the log object according to your needs. Below are recommendations for the field names and their types.

### *message* - **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

Fully formatted string representing the log message. For example, it can be produced from `arguments` and `timestamp`.

### *pid*

The PID of the process.

### *hostname*

Arbitrary machine name as a string.

### *platform*

Machine platform.

### *arch*

Processor architecture.

### *cwd*

Current working directory of the process.
