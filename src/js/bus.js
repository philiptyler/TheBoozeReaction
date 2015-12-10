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
   for it. In the spirit of this, we've removed some methods that are Backbone-
   specific (listenTo, etc).

   Here is to define a catalog of events that are specific to our
   application. Here it is:

   name: LIBATIONS_READY
   description: A big collection of delicious beverages is available
   payload: An array of plain JS objects, each representing an establishment.
            Each establishment object will have 'libations', an array of plain
            objects, each representing a libation served at that establishment.
   implemented: dev

   name: ESTABLISHMENTS_READY
   description: A collection of beverage-serving bars are available
   payload: Backbone collection of establishment backbone models
   implemented: dev

   name: ESTABLISHMENT_LIBATIONS_READY
   description: A collection of establishment-libation relations are available
    These relations represent what drinks are served at which bar and their price there
   payload: Backbone collection of establishment backbone models
   implemented: dev

   name: RATINGS_READY
   description: A collection of ratings for drinks served at bars are available.
    A rating represents a score for that drink at that bar: I.E. the same drink could
    have different ratings at each bar its served at.
   payload: Backbone collection of establishment backbone models
   implemented: dev

   name: ALL_READY
   description: All json for all 4 models has been loaded.  only triggered at the end
    of a 'loadAllJSON' call in main.js
   payload: N/A
   implemented: dev

*/

var Backbone = require('backbone');
var _ = require('underscore');
var bus = _.clone(Backbone.Events);

bus.listenTo = null;
bus.stopListening = null
bus.listenToOnce = null;

module.exports = bus;
