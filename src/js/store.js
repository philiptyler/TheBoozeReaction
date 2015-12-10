var EstablishmentCol = require('./establishmentCol');
var LibationCol = require('./libationCol');

var store = {};
var loadCounter = 0;
var num

/* builds establishment Backbone collection from json from API */
store.establishments = new EstablishmentCol();
window.bus.on('ESTABLISHMENTS_READY', function (jsonPayload) {
  establishments.reset(jsonPayload));

});

/* builds establishment Backbone collection from json from API */
store.libations = new LibationCol();
window.bus.on('LIBATIONS_READY', function (jsonPayload) {
  libations.reset(jsonPayload));
});

module.exports = store;

// PRIVATE FUNCTIONS
function tryDataMerge() {
  counter = counter + 1 % ;
  if (counter )
}

