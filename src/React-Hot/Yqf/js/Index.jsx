﻿var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./Container');
var NavBar = require('./NavBar');
var ToolBar = require('./ToolBar');
var  clickHandler = function(e) {
    //e.preventDefault();
    //  console.log(item);
    //    return '22225'
    // this.setAttribute('id','hah');
 
    console.log(e);
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
rightNav: [itemRight, itemRight],
    onAction: clickHandler,
    };


var App = React.createClass({

    render: function () {
        return (

                <Container>
                    <NavBar {...dataAll}></NavBar>
                    <ToolBar onAction={clickHandlera}>
                        <ToolBar.Item active icon="home" title="首页" />
                        <ToolBar.Item icon="gear" title="设置" />
                        <ToolBar.Item icon="info"  title="信息" />
                    </ToolBar>
                <div className='content'>

                </div>
                </Container>
            );
    }

});
ReactDOM.render(<App />, document.getElementById('root'));