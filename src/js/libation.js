var Backbone = require('backbone');

var Libation  = Backbone.Model.extend({

  defaults: {
    name: '',
    proof: '',
    description: '',
    image: ''
  },

});

module.exports = Libation;
