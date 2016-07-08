var React = require('react');

var NavBar = React.createClass({
    propTypes: {
        title: React.PropTypes.node,
        leftNav: React.PropTypes.array,
        rightNav: React.PropTypes.array,
        onAction: React.PropTypes.func,
    },
    getDefaultProps: function () {

        return {
            headerCN: 'bar bar-nav',
            onAction: function () { },
        }
    },
    renderTitle:function(){
        return this.props.title ? (<h1 className='title'>{this.props.title}</h1>) : this.props.children;
    },
    renderNav:function(position){
        var nav = this.props[position + 'Nav'];
        return nav && Array.isArray(nav)   ?  this.renderNavItemMore(nav,position) :null;

    },


    renderNavItemMore:function(nav,position){
       
        var node=nav.map(function(item,index){
            var classA=item.icon ? ( 'icon ' + item.icon + ' pull-'+position) : ( 'pull-'+position + ' button-link');
            //  console.log(this);
            return <a key={index} href={item.href } className={classA}  onClick={item.onAction.bind(item,item.title)}>{item.title}</a>
        });
      
        return   !nav[1] ? node : (<div className={position}>{node}</div>);

    },
    renderNavItem:function(item,index){
    
     let {
     
      title,
      customIcon,
      icon,
      isClone,
      // href,
      className,
      ...otherProps,
    } = item;

            let itemProps = {
                key: 'navbarNavItem' + index,
                onClick: this.props.onAction.bind(this, item),
                  ...otherProps,
                  };
      //  console.log(this.props.onAction);
            var classA=item.icon ? ( 'icon ' + item.icon + ' pull-'+ position) : ( 'pull-'+  position + ' button-link');
            return <a key={index} href={item.href } className={classA} onClick={this.props.onAction}>{item.title} </a>
    
    },

    render: function () {
        var {title,headerCN,...props}=this.props;
        var headerCN = headerCN ? 'bar bar-nav ' + headerCN : headerCN;
        console.log('重绘');
        return (
            <header className={headerCN} {...props}>
                {this.renderNav('left')}
                {this.renderNav('right')}
                {this.renderTitle()}
            </header>
            )
    }


});

module.exports = NavBar;