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
    menu: null
  },

  initialize: function () {
    this.set('menu', new Menu());
  }

});

module.exports = Establishment;
