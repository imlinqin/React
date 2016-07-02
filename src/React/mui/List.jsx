
var React = require('react');
var  classNames = require('classnames');


var List = React.createClass({
    getDefaultProps:function(){
        return {
            classPrefix:'list',
        }
    },
    propTypes: {
        inset:React.PropTypes.bool,
    },
    render: function () {
        var {className,inset,...props}=this.props;
        var ulClass=className?'list '+ className :'list' ;
        return(<ul className={ulClass} {...props}></ul>);

    }


});

 List.Item= React.createClass({
     getDefaultProps:function(){
         return {
             classPrefix:'item',
             role:'item',
         }
     },
     propTypes:{
         role:React.PropTypes.oneOf(['header','item']),
         title:React.PropTypes.string,
         href:React.PropTypes.string,
         after:React.PropTypes.node,
         desc:React.PropTypes.none,
         nested:React.PropTypes.oneOf(['input','radio','checkbox'])
     },
     renderTitleRow(){
         var {title,subTitle,href,linkComponent,}=this.props;
         var itemTitle=title?(<h3 key='itemTitle' className='item-title'>{title}</h3>):null;
         var titleChildren = [itemTitle,this.renderAddon('after')]
     
     },
     renderAddon:function(type){
         return this.props[type] ? (<div key={type} className={'item-'+type}>{this.props[type]}</div>):null;
     },


     render:function(){
         var {title,className,href,role,...props}=this.props;
         var liClass= (className?"item"+ className : className)+ (href ? " item-linked":'');
         return (<li className={liClass} {...props}>
    {role==='header' ? children : ''}
    </li>)
     }

});