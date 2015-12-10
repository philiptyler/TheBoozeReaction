var Backbone = require('backbone');

var Establishment  = Backbone.Model.extend({

  defaults: {
    name: '',
    address: '',
    coordinates: '',
    description: '',
    image: ''
  },

});
