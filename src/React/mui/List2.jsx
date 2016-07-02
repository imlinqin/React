
var React = require('react');
var  classNames = require('classnames');

var List = React.createClass({

    propTypes:{
        inset:React.PropTypes.bool
    },
    getDefaultProps:function(){
        return{
            className:'list'
        }
    },
    render:function(){
        var {className,inset,...props}=this.props;
        className=className?className+ ' list':className;
        return(<ul {...props} className={className}></ul>);
    }
});

List.Item=React.createClass({

    propTypes:{
        role:React.PropTypes.oneOf(['header','item']),
        title: React.PropTypes.string,
        subTitle: React.PropTypes.string,
        href: React.PropTypes.string,
        nested: React.PropTypes.oneOf(['input', 'radio', 'checkbox']), // nested field
    },
    getDefaultProps:function(){
        return{
            role:'item'
        }

    },
    renderTitleRow:function(){
        let {
            title,
            subTitle,
            href,
            linkComponent,
            } = this.props;
        var itemTitle=title?(<h3 className='item-title' key="itemTtiel">{title}</h3>):null;
            var itemChildren=[itemTitle,this.renderAddon('after'),href ?(<icon className='item-icon' key='itemChevron'></icon>):null];

        return subTitle ? (<div className='item-title-row' key='itemTitleRow'>
            {itemChildren};
        </div>):itemChildren;
    },
    renderMain:function(){

        var {media,subTitle,desc,children}=this.props;
        var titleRow=this.renderTitleRow();
        var noJustTitle=media || subTitle || desc || children;
        console.log(titleRow);
        return noJustTitle? (<div key='itemMian' className='item-mian'>
            {titleRow}
            {this.renderAddon('subTitle')}
            {this.renderAddon('desc')}
            {children}
        </div>):titleRow;
    },
    wrapLink:function(children){
        var {linkComponent,linkProps,href,target}=this.props;
        return linkComponent ? (linkComponent,linkprops,children):(<a href={href} target={target}>{children}</a>);
    },
    renderAddon:function(type){
        return this.props[type]?(<div key={'item-'+type} className={'item-'+type}>{this.props[type]}</div>):null;
    },
    render:function(){ 
        var {className,role,subTitle,href,after,media,children,linkComponent,linked,nested,...props}
=this.props;
        var itemChildren=[
        this.renderAddon('media'),this.renderMain()
        ];
        var liClass='item'+ (href || linkComponent?  ' item-linked':'')  + (subTitle ?" item-content":''  ) ;
        return (<li {...props} className={liClass}>

            {role === 'header' ? children :
          (href || linkComponent) ? this.wrapLink(itemChildren) : itemChildren}



        </li>)
    }

})

module.exports = List;
