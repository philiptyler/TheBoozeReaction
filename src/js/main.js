// We're attaching a single event bus to the global object.
// We don't have to do this, but it aids understanding of what we're doing,
// and makes it easier to experiment from the browser.
window.bus = require('./bus');
window.$ = require('jQuery'); // binding to window for Backbone :/
var store = require('./store');

// attach all our top-level views:
var views = require('./views').start();

// start the router
var Router = require('./router');
new Router().start();

loadAllJSON();

function loadAllJSON () {
  var establishmentPromise = window.$.get('http://qa2.theblacktux.com:8000/api/1/establishments/', {}, function (response) {
    bus.trigger('ESTABLISHMENTS_READY', response.results);
  });

  var libationPromise = window.$.get('http://qa2.theblacktux.com:8000/api/1/libations/', {}, function (response) {
    bus.trigger('LIBATIONS_READY', response.results);
  });

  var establishmentLibationPromise = window.$.get('http://qa2.theblacktux.com:8000/api/1/establishment_libations/', {}, function (response) {
    bus.trigger('ESTABLISHMENT_LIBATIONS_READY', response.results);
  });

  var ratingPromise = window.$.get('http://qa2.theblacktux.com:8000/api/1/ratings/', {}, function (response) {
    bus.trigger('RATINGS_READY', response.results);
  });

  $.when(establishmentPromise, libationPromise, establishmentLibationPromise, ratingPromise).done(function () {
    bus.trigger('ALL_READY');
  });
}







