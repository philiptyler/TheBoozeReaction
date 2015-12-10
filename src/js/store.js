var EstablishmentCol = require('./establishmentCol');
var LibationCol = require('./libationCol');

var store = {};
var loadCounter = 0;

/* builds establishment Backbone collection from json from API */
window.bus.on('ESTABLISHMENTS_READY', function (jsonPayload) {
  store.establishments = new EstablishmentCol(jsonPayload);
});

/* builds establishment Backbone collection from json from API */
window.bus.on('LIBATIONS_READY', function (jsonPayload) {
  store.libations = new LibationCol(jsonPayload);
});

window.bus.on('ALL_READY', function () {
  console.log(store);
});

module.exports = store;

