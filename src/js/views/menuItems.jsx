var React = require('react');
var ReactDOM = require('react-dom');
var MenuItem = require('./menuItem.jsx');

module.exports = React.createClass({
    getInitialState: function(){
        return { data: [] };
    },
    render: function(){
        var menuItemNodes = this.state.data.map(function(lib){
            console.log('lib', lib);
            return (
                <MenuItem key={ lib.id } name={ lib.name }
                proof={ lib.proof }description={ lib.description }/>
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

