var Backbone = require('backbone');
var Menu = require('./menu');

var Establishment  = Backbone.Model.extend({

  defaults: {
    id: '',
    name: '',
    address: '',
    coordinates: '',
    description: '',
    image: '',
    menu: function () { return new Menu(); }
  },

});

module.exports = Establishment;
