var React = require('react');
var ClassNames = require('classnames');

var ToolBar = React.createClass({
    propTypes: {
        component: React.PropTypes.node,
        onAction:React.PropTypes.func,
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
            <Component {...props} className={ClassNames('bar bar-tab tabbar-labels',className)}>
                {React.Children.map(children,function(child,index){
                    var {
                        eventKey,
                        onClick,
                        ...props
                    }=child.props;

                    var clickHandler= onClick || onAction;
                    var key = eventKey || index;
                    eventKey = eventKey || key;
                    return (
                        <ToolBar.Item {...props} key={key} onClick={clickHandler.bind(null,eventKey)} eventKey={eventKey} />
                        )


                })}

            </Component>


        )

    }
});

ToolBar.Item =React.createClass({

    propTypes:{

        component:React.PropTypes.any,
        icon:React.PropTypes.string,
        title:React.PropTypes.string,
        href:React.PropTypes.string,
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
      getInitialState: function () {
        return {
            abc: '213',
        };
    },
    renderIcon:function(){
        var {icon,}=this.props;
        var iconClass='icon-'+ icon;
        return icon ? (
            <span key='tabbarIcon' className={ClassNames('icon',iconClass)}></span>
            ):null;
    },
    renderTitle(){
        var {title,}=this.props;
        return title ? (
            <span className='tab-label' key='tabarTitle'>{title}</span>
            ):null;
    },
    handleSort:function(){
         PubSub.publish('sort');
    
    },
    onclick:function(){
        this.setState({
            abc:'66'
        })
    },
    render:function(){
        var {component,
        className,
            active,
            children,
            onAction,
            ...props
        }=this.props;
       // console.log(component);
        var  Component = this.props.href ? 'a' : component;
        if(onAction&&active){
         //   console.log('ismodal','打开')
            onAction.bind(null);
        }
        return (
            <Component {...props} className={ClassNames('tab-item',className,{'active':active})} >
                {children ? this.props.children :[
          this.renderIcon(),
          this.renderTitle(),
              ]}
               


            </Component>


            )


    }
})

module.exports = ToolBar;