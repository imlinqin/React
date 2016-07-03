var React = require('react');
var Container = React.createClass({
    propTypes:{
        pageName:React.PropTypes.string
    },
    getDefaultProps:function(){
        return {
            pageName:'page'
        }
    
    },
    render: function () {
     
        var {pageName,...props}=this.props;

        var pageName= pageName ? "page " + pageName : pageName;
        return (
        <div className="page-group">
            <div className={pageName} {...props}>

            </div>
        </div>
            )
    }
});
module.exports=Container;
