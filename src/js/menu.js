var Backbone = require('backbone');
var MenuItem = require('./menuItem');

var Menu  = Backbone.Collection.extend({

  model: MenuItem

});

module.exports = Menu;
