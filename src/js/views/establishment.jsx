var React = require('react');
var ReactDOM = require('react-dom');
var MenuItems = require('./menuItems.jsx');

module.exports = React.createClass({
    render: function() {
        return (<li>
            <h4><a href={'establishments/' + this.props.id}>{this.props.name}</a></h4>
            <p>{this.props.description}</p>
            <div>
            MENU: <MenuItems data={ this.props.menu.toJSON() } /></div>
            </li>
        );
    }
});
