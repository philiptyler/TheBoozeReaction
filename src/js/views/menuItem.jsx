var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function() {
        return (<li>
            <strong>{this.props.name} ${this.props.price}</strong>
            <p><em>Proof: {this.props.proof} Rating: {this.props.rating}</em></p>
            <p>{this.props.description}</p>
            </li>
        );
    }
});
