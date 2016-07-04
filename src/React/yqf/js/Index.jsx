﻿var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./Container.jsx');
var NavBar = require('./NavBar.jsx');
var ToolBar = require('./ToolBar.jsx');
var  clickHandler = function(e) {
    //e.preventDefault();
    //  console.log(item);
    //    return '222dd2s5'
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

    getInitialState:function(){
        return {selected:'home'}

    },

    ToolBarHanderClick:function(key,e){
        this.setState({
            selected: key
        }, function() {
            console.log('选中了： %s', this.state.selected);
            console.log(this.state.selected === 'home')
        });
    },


    render: function () {
        return (

                <Container>
                    <NavBar {...dataAll}></NavBar>
                    <ToolBar onAction={this.ToolBarHanderClick}>
                        <ToolBar.Item icon="home" title="首页" eventKey="home"
                                      active={this.state.selected === 'home'} />
                        <ToolBar.Item icon="gear" href='#' title="设置" active={this.state.selected === 'gear'}
                                      eventKey="gear" />
                        <ToolBar.Item icon="info" title="信息" active={this.state.selected === 'info'}
                                      eventKey="info" />
                    </ToolBar>
                <div className='content'>
                    ddr
                </div>
                </Container>
            );
    }

});
ReactDOM.render(<App />, document.getElementById('root'));