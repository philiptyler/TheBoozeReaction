var EstablishmentCol = require('./establishmentCol');

var establishments = new EstablishmentCol();
establishments.on('reset', function (collection, options) {
  bus.trigger('ESTABLISHMENTS_READY', collection.toJSON());
});
