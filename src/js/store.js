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
  store.compileData();
});

window.bus.on('LOAD_ESTABLISHMENT', function (establishmentId) {
  console.log('store', store);
  window.bus.trigger('SHOW_ESTABLISHMENT', store.establishments.get(establishmentId));
});

module.exports = store;

// PRIVATE FUNCTIONS
store.compileData = function () {
  this.establishments = new EstablishmentCol(this.establishmentJSON);
  this.libations = new LibationCol(this.libationJSON);

  /* Bind Rating objects to their Libation-Establishment relationships */
  var allMenu = new Menu(this.menuJSON);
  for (var i = 0; i < this.ratingJSON.length; i++) {
    var menuItem = allMenu.get(this.ratingJSON[i].establishment_libation)
    if (menuItem) {
      menuItem.set('rating', this.ratingJSON[i].score);
    }
  }

  /* Iterate through all Establishment-Libation relationships and add them to their appropriate
      Establishment Models' Menu */
  var that = this;
  allMenu.forEach(function (element) {
    var libation = that.libations.get(element.get('libation'));
    if (libation) {
      element.set('libation', libation.toJSON());
    }

    var establishment = that.establishments.get(element.get('establishment'))
    if (establishment) {
      establishment.get('menu').add(element);
    }
  });

  window.bus.trigger('JSON_READY', this.establishments.toJSON());
}

