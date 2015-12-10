// We're attaching a single event bus to the global object.
// We don't have to do this, but it aids understanding of what we're doing,
// and makes it easier to experiment from the browser.
window.bus = require('./bus');
var $ = require('jQuery');


console.log($.get('http://qa2.theblacktux.com:8000/api/1/establishments'));





