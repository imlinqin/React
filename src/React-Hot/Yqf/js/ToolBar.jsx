var React = require('react');
var ClassNames = require('classnames');

var ToolBar = React.createClass({
    propTypes: {
        component: React.propTypes.node,
        onAction:React.propTypes.func,
    },
    getDefaultProps: function () {
        return {
            component: 'nav',
            onAction: function () { }
        }

    },
    render: function () {
        var {component:Component,
        className,
         children,
            onAction,
            ...props

        }=this.props;

        return(
            <Component {...props} className={ClassNames('bar','bar-tab','tabbar-labels',className)}>
                {React.Children.map(children,function(item,index){
                
                    return (
                        <a className={ClassNames('tab-item')} key={key}></a>
                        )
                
                
                })}

            </Component>

       
        )

    }
});

TabBar.Item =React.createClass({

    propTypes:{
    
        component:React.propTypes.any,
        icon:React.PropTypes.string,
        title:React.PropTypes,string,
        href:React.PropTypes.stirng,
        eventKey:React.PropTypes.any,
        badge:React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
        ]),
        selected:React.PropTypes.bool,
        selectedIcon:React.PropTypes.node,

    },
    getDefaultProps:function(){
        return {
            component:'span',
            onAction:function(){}
        }
    },
    renderIcon:function(){
        var {icon,}=this.props;
        var iconClass='icon-'+ icon;
        return icon ? (
            <span key= 'tabbarIcon'  className={ClassNames('icon',iconClass)}></span>
            ):null;
    },
    renderTitle(){
        var {title,}=this.props;
        return title ? (
            <span className='tab-label' key='tabarTitle'>{title}</span>
            ):null;
    },
    render:function(){
        var {component:Component,
        className,
            ...props
        }=this.props;

        Component = this.props.href ? 'a' : Component;
        return (
            <Component {...props} className={ClassnName('tab-item',className)}>
                {this.renderIcon()}
                {this.renderTitle()}
            </Component>
            
            
            )

    
    }
})

module.exports = ToolBar;