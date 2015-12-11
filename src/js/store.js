var EstablishmentCol = require('./establishmentCol');
var LibationCol = require('./libationCol');
var Menu = require('./menu');

var store = {};
var loadCounter = 0;

/* builds establishment Backbone collection from json from API */
window.bus.on('ESTABLISHMENTS_READY', function (jsonPayload) {
  store.establishmentJSON = jsonPayload;
});

/* builds libation Backbone collection from json from API */
window.bus.on('LIBATIONS_READY', function (jsonPayload) {
  store.libationJSON = jsonPayload;
});

/* builds libation Backbone collection from json from API */
window.bus.on('ESTABLISHMENT_LIBATIONS_READY', function (jsonPayload) {
  store.menuJSON = jsonPayload;
});

/* builds libation Backbone collection from json from API */
window.bus.on('RATINGS_READY', function (jsonPayload) {
  store.ratingJSON = jsonPayload;
});

window.bus.on('ALL_READY', function () {
  compileData();
});

module.exports = store;

// PRIVATE FUNCTIONS
function compileData() {
  store.establishments = new EstablishmentCol(store.establishmentJSON);
  store.libations = new LibationCol(store.libationJSON);

  /* Bind Rating objects to their Libation-Establishment relationships */
  var allMenu = new Menu(store.menuJSON);
  for (var i = 0; i < store.ratingJSON.length; i++) {
    var menuItem = allMenu.get(store.ratingJSON[i].establishment_libation)
    if (menuItem) {
      menuItem.set('rating', store.ratingJSON[i].score);
    }
  }

  /* Iterate through all Establishment-Libation relationships and add them to their appropriate
      Establishment Models' Menu */
  allMenu.forEach(function (element) {
    var establishment = store.establishments.get(element.get('establishment'))
    if (establishment) {
      establishment.get('menu').add(element);
    }
  });

  window.bus.trigger('JSON_READY', store.establishments.toJSON());
}

