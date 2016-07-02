var React = require('react');
var classNames = require('classnames');

var Navbar = React.createClass({
    getDefaultProps: function () {
        return {
            headerClass:'navbar navbar-primary',
            titleClass: "navbar-title navbar-center",
            showLeft: true,
            showRight: false,
            customerState:false,
            titleOnLeft:'123'
        }

    },

    renderTitle:function() {
        let {title,titleOnLeft,titleClass}=this.props;
        return title ? (<h2 className={titleClass}>{title} -- {this.props.title}   </h2>):this.props.children;
    
        },
    renderNav:function(position){
        var navProps= this.props[position + 'Nav'];
        var nvaName='navbar-nav'+ " " +  'navbar-' +position;
        return navProps && Array.isArray(navProps) ? (<div className={nvaName}>
    {navProps.map(this.renderNavItem)}

    </div>): null;
    },

 renderNavItem(item, index) {

return <span key={index}>{item.title} {item.icon}  {item.props}  {index}</span>

 },

   
    render: function () {

        let {title,headerClass,linkComponent,...props}=this.props;
        console.log(this.props['title']);
        var abcc=[linkComponent];
        return (<header className={headerClass} {...props}>
     {this.renderTitle()}
        {this.renderNav('left')}
        {this.renderNav('right')}
    <div>
        {abcc}
   
    </div>
                   
        </header>)
    }
   
})



//export default Container;
module.exports = Navbar;


