var Backbone = require('backbone');
var Establishment = require('./establishment');

var EstablishmentCol  = Backbone.Collection.extend({

  model: Establishment

});
module.exports = EstablishmentCol;
