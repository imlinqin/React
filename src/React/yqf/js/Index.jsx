var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./Container.jsx');
var NavBar = require('./NavBar.jsx');
var ToolBar = require('./ToolBar.jsx');
var Switch = require('./Switch.jsx');
require('./style.css');


var  clickHandler = function(e) {
    //e.preventDefault();
    //  console.log(item);
    //    return '222dd2s5'
    // this.setAttribute('id','hah');

    console.log(e);
};
var handleSwitch=function() {
  //  console.log(this.getValue());
    console.log(this);
};
var clickHandlera=function(key, e) {
    // this.setAttribute('id','hah');
    console.log(this);
};

const itemLeft = {
    href: '#',
    title: 'Left',
    onAction: clickHandler
};
console.log(itemLeft);
const itemRight = {
    href: '#',
    title: 'Right',
    onAction: clickHandler
};
var itemRighta = {
    href: '#',
    title: 'Right',
    onAction: clickHandler,
    bb:function(){
        var cc='22'
    }

};
const dataAll = {
    title: 'Navbar',
    leftNav: [{...itemLeft, icon: 'left-nav'}],
rightNav: [itemRight],
    onAction: clickHandler,
    };


var App = React.createClass({

    getInitialState:function(){
        return {selected:'home'}

    },

    ToolBarHanderClick:function(key,e){
        this.setState({
            selected: key
        }, function() {
           // console.logd('选d中了： %sd', this.state.selected);
       //  console.log(this)
        });
    },
    customerClick:function(){
    console.log("344")
    
    },
   handleSwitcha: function(e) {
      console.log(e.getValue());
     // console.log(e);
},


    render: function () {
        return (

                <Container>
                    <NavBar {...dataAll}></NavBar>
                    <ToolBar onAction={this.ToolBarHanderClick}>
                        <ToolBar.Item icon="filter" title="筛选" eventKey="home"
                                      active={this.state.selected === 'home'} />
                        <ToolBar.Item icon="price" href='#' title="低价优先" active={this.state.selected === 'gear'}
                                      eventKey="gear" />
                        <ToolBar.Item icon="info" title="全程付款" active={this.state.selected === 'info'}
                                      eventKey="info" >
                            <Switch onValueChange={this.handleSwitcha} defaultChecked name='uu' />
                            <span onClick={this.customerClick}>全程付款</span>
                        </ToolBar.Item>
                    </ToolBar>
                <div className='content'>
                    ddr
                </div>
                </Container>
            );
    }

});
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var TodoList = React.createClass({

  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={3000}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});


ReactDOM.render(<TodoList />, document.getElementById('root'));