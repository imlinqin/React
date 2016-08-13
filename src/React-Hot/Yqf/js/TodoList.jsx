var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var TodoList = React.createClass({
    getInitialState: function () {
        return { items: ['hello', 'world', 'click', 'me'] };
    },
    handleAdd: function () {
        var newItems =
          this.state.items.concat([prompt('Enter some text')]);
        this.setState({ items: newItems });
    },
    handleRemove: function (i) {
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({ items: newItems });
    },
    render: function () {
        console.log(this.props.show);
        var items = this.state.items.map(function (item, i) {
            return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
            {item}
        </div>
      );
        }.bind(this));
        return (
    
      this.props.popup ? <div class="popup popup-about modal-in">
          <div class="content-block">
            <p>About</p>
            <p><a href="#" class="close-popup">Close popup</a></p>
            <p>Lorem ipsum dolor ...</p>
          </div>
</div>:<div>sdsd</div>
    
    );
    }
});
module.exports = TodoList;

