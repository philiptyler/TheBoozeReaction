var React = require('react');
var ReactDOM = require('react-dom');
var EstablishmentView = require('./establishment.jsx');

module.exports = React.createClass({
    getInitialState: function(){
        return { data: [] };
    },
    componentDidMount: function(){
        window.bus.on('ESTABLISHMENTS_READY', function(data){
            this.setState({ data: data });
            this.render();
        }, this);
    },
    render: function(){
        var establishmentNodes = this.state.data.map(function(est){
            return (
                <li key={ est.id }>
                    <h3>{ est.name }</h3>
                    <p>{ est.description }</p>
                </li>
            );
        });

        // <Establishment name=???/> below?
        return (
            <ul>
            { establishmentNodes }
            </ul>
        );
    }
});

