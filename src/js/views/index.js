// helper function to reduce boilerplate
var ReactDOM = require('react-dom');
var React = require('react');

var attach = function(component, elementId, props){
    ReactDOM.render(React.createElement(component, props), document.getElementById(elementId));
};

window.bus.on('SHOW_ESTABLISHMENT', function (data) {
  attach(require('./establishment.jsx'), 'establishment', data);
})

module.exports = {
    // attach our top-level views to the HTML page:w
    start: function() {
        attach(require('./establishments.jsx'), 'establishments', [])
    }
}

