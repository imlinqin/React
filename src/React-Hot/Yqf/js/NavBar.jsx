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
        return nav && Array.isArray(nav)   ?  this.renderNavItemMore :null;
    },

    renderNavItemMore:function(nav,position){

        return   !nav[1] ? nav.map(this.renderNavItem) : (<div className={position}>nav.map(this.renderNavItem)</div>);

    },

    renderNavItem:function(item,index){
        var classA=item[icon] ? ( 'icon ' + item.icon + ' pull-'+positon) : ( 'pull-'+positon + 'button-link');
        return <a key={index} href={item.href } className={classA} onClick={this.props.onAction.bind(this, item)}>{item.title}</a>
    },
    render: function () {
        var headerCN = headerCN ? 'bar bar-nav ' + headerCN : headerCN;
        var {title,...props}=this.props;
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