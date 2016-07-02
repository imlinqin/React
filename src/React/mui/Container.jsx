var React = require('react');
var Container = React.createClass({
    render: function () {
        return (

            <div>
                  <div>
                     <div>
                         {
                             React.Children.map(this.props.children,function(child){
                                 return child
                             })

                         }

                     </div>
                  </div>
            </div>
)
    }
})



//export default Container;
module.exports = Container;
