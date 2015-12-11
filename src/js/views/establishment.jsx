var React = require('react');
var ReactDOM = require('react-dom');

var EstablishmentView = React.createClass({
    render: function() {
        return (
            <h4>{this.props.name}</h4>
            <p>{this.props.description}</p>
        );
    }
});

console.log('rendering');
ReactDOM.render(<EstablishmentView name="BAR" description="A horrible Place" />, document.getElementById('establishments'));
