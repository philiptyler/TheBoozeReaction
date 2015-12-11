var React = require('react');
var ReactDOM = require('react-dom');
var MenuItems = require('./menuItems.jsx');

module.exports = React.createClass({
    render: function() {
        return (<li>
            <h4>{this.props.name}</h4>
            <p>{this.props.description}</p>
            <div>MENU: <MenuItems data={ this.props.menu } /></div>
            </li>
        );
    }
});
