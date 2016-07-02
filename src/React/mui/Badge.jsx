var React = require('react');

var Badge = React.createClass({

    getDefaultProps: function () {

        return {
            classBadge: 'badge',
            component:'span',
            radiused:'badge-rounded'
        }
    },

    render: function () {
        
        var {component:Component,radiused,classBadge,href,...props} =this.props;
        classBadge=radiused?classBadge+ " "+radiused:classBadge;
        Component=href ?'a': Component;
        return <Component className={classBadge} {...props}>
    
    
    </Component>
    }


})


export default Badge;

 
