var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./Container');
var NavBar = require('./NavBar');

var App = React.createClass({

    render: function () {
        return (
          
                
                <div className='content'>
                    test
                </div>
          
            );
    }

});
ReactDOM.render(<App/>, document.getElementById('root'));