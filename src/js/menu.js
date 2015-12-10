var Backbone = require('backbone');
var Establishment = require('./menuItem');

var Menu  = Backbone.Collection.extend({

  model: menuItem

});

module.exports = Menu;
