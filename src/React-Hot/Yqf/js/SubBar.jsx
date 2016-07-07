var React = require('react');
var classNames = require('classnames');
var SubBar = React.createClass({
    
    getDefaultProps: function () {

        return {
           
        }
    },


    render: function () {
        var {className,barClass,...props}=this.props;
        return (<div className={classNames('bar bar-header-secondary',className)} {...props}>
    </div>)

    }

});

module.exports = SubBar;