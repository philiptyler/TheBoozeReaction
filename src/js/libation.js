var Backbone = require('backbone');

var Libation  = Backbone.Model.extend({

  defaults: {
    id: '',
    name: '',
    proof: '',
    description: '',
    image: ''
  },

});

module.exports = Libation;
