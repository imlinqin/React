var React = require('react');
var Container = React.createClass({
    propTypes:{
        pageName:React.PropTypes.string
    },
    getDefaultProps:function(){
        return {
            //pageName:'page'
        }
    
    },
    render: function () {
     
        var {pageName,...props}=this.props;

        var pageName= pageName ? "page page-current" + pageName : 'page page-current';
        return (
       
            <div className={pageName} {...props}>

            </div>
       
            )
    }
});
module.exports=Container;
