var React = require('react');
var ReactDOM = require('react-dom');
var MenuItem = require('./menuItem.jsx');

module.exports = React.createClass({
    render: function(){
        var menuItemNodes = this.props.data.map(function(item) {
            return (
                <MenuItem key={ item.id } price={ item.price } name={ item.libation.name }
                description={ item.libation.description } proof={ item.libation.proof }
                rating={ item.rating }/>
            );
        });

        // <Establishment name=???/> below?
        return (
            <ul>
            { menuItemNodes }
            </ul>
        );
    }
});

