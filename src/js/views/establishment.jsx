var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function() {
        return (<div>
            <h4>{this.props.name}</h4>
            <p>{this.props.description}</p>
            </div>
        );
    }
});
