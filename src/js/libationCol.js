var Backbone = require('backbone');
var Libation = require('./libation');

var LibationCol  = Backbone.Collection.extend({

  model: Libation

});
module.exports = LibationCol;
