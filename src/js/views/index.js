// helper function to reduce boilerplate
var ReactDOM = require('react-dom');
var React = require('react');

var attach = function(component, elementId){
    ReactDOM.render(React.createElement(component), document.getElementById(elementId));
};

module.exports = {
    // attach our top-level views to the HTML page:w
    start: function(){
        attach(require('./establishments.jsx'), 'establishments')
    }
}

