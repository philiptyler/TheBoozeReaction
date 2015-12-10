var Backbone = require('backbone');

var MenuItem  = Backbone.Model.extend({

  defaults: {
    libation: null,
    price: 0.0,
    volume: 0,
    id: '',
    rating: -1
  },

});

module.exports = MenuItem;
