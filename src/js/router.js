/*
   This is our application's browser-specific router. The routes listed here
   correspond to what a user will actually see and bookmark. Any similarity to
   our backend API is purely coincidental.

   For the most part, navigating through our site should be done with normal
   HTML links: <a href="/whatever">Whatever!</a>. In the event that you want to
   use JS to shove the user to a new "page", use router.navigateTo('/whatever').

   Also for the most part, routes will probably just hide and show DOM elements
   (or add and remove classes for CSS). Separate pages are just an illusion!
*/

var Backbone = require('backbone');
var Router = Backbone.Router.extend({
    routes: {
        '':                        'showEstablishments',
        'establishments':          'showEstablishments', // alias
        'establishments/:id/edit': 'editEstablishment',
        'establishments/:id':      'showEstablishment',
    },

    showEstablishments: function(){
        console.log('showing all establishments');
        $('.page').hide();
        $('#establishments').show();
    },

    showEstablishment: function(establishmentId){
        console.log('showing establishment '+establishmentId);
        $('.page').hide();
        $('#establishment').show();
        window.bus.trigger('LOAD_ESTABLISHMENT', establishmentId);
        // request that the specific model is loaded, TBD
    },

    editEstablishment: function(establishmentId){
        console.log('showing establishment edit page for '+establishmentId);
        $('.page').hide();
        $('#editEstablishment').show();
        // request that the specific model is loaded, TBD
    }

});

Router.prototype.navigateTo = function(path){
    // Just a wrapper around Backbone.Router's navigate
    // trigger: true should be the default, but it is not
    this.navigate(path, { trigger: true });
};

Router.prototype.start = function(){
    // Just a wrapper around Backbone.history.start
    // This abstracts us from Backbone, but admittedly this gain is minor
    Backbone.history.start({ pushState: true });
};

module.exports = Router;
