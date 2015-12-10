/*
   This is a simple event bus. It has four methods:

        1) on
        2) off
        3) trigger
        4) once

   It could be implemented any number of ways. In this case we'll
   use Backbone because why not.

   This event bus is a nice way to narrow the interface between models and
   views. Experience has shown that sometimes relying on the wide catalog 
   of Backbone Model events means that views know too much about Backbone, and
   it's harder to replace Backbone with something else when the occasion calls
   for it.

   In the spirit of this, we've removed extra Backbone events (listenTo, etc). 

*/

var Backbone = require('backbone');
var _ = require('underscore');
var bus = _.clone(Backbone.Events);

bus.listenTo = null;
bus.stopListening = null
bus.listenToOnce = null;

module.exports = bus;
