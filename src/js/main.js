// We're attaching a single event bus to the global object.
// We don't have to do this, but it aids understanding of what we're doing,
// and makes it easier to experiment from the browser.

window.bus = require('./bus');

