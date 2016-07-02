
var React = require('react');

//var FancyCheckbox = React.createClass({
//    render: function() {
//        var { checked, ...other } = this.props;
//        var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
//        // `other` contains { onClick: console.log } but not the checked property
//        return (
//          <div {...other} className={fancyClass} />
//    );
//}
//});
var FancyCheckbox = React.createClass({
    render: function() {
        var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
        return (
          <div className={fancyClass} onClick={this.props.onClick}>
              
             
              {  React.Children.map(this.props.children, function (child) {
              return child              })

              }

          </div>
    );
    }
});

module.exports = FancyCheckbox;
