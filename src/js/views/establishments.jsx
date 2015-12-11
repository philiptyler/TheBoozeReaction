var React = require('react');
var ReactDOM = require('react-dom');
var EstablishmentView = require('./establishment.jsx');

module.exports = React.createClass({
    getInitialState: function(){
        return { data: [] };
    },
    componentDidMount: function(){
        window.bus.on('JSON_READY', function(data){
            this.setState({ data: data });
        }, this);
    },
    render: function(){
        var establishmentNodes = this.state.data.map(function(est){
            return (
                <EstablishmentView key={ est.id } name={ est.name } description={ est.description } menu={ est.menu }/>
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

