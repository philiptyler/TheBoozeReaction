var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function() {
        return (<li>
            <h6>{this.props.name}, {this.props.proof} PROOF</h6>
            <p>{this.props.description}</p>
            </li>
        );
    }
});
