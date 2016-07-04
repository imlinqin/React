var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./Container');
var NavBar = require('./NavBar');

var  clickHandler = function(e) {
 //e.preventDefault();
    //  console.log(item);
    //    return '22225'
    
    console.log(e)
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
  rightNav: [itemRight, itemRight],
  onAction: clickHandler,
};


var App = React.createClass({
   
    render: function () {
        return (

                <Container>
                    <NavBar {...dataAll} ></NavBar>
                <div className='content'>
                    test
                </div>
                </Container>
            );
    }

});
ReactDOM.render(<App />, document.getElementById('root'));