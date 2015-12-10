window.bus = require('./bus');
var EstablishmentCol = require('./establishmentCol');
var LibationCol = require('./libationCol');

var establishments = new EstablishmentCol();
bus.on('ESTABLISHMENTS_READY', function (jsonPayload) {
  establishments.reset(jsonPayload));
});

var libations = new LibationCol();
bus.on('LIBATIONS_READY', function (jsonPayload) {
  libations.reset(jsonPayload));
});

