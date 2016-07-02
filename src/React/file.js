'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var itemLeft = {
    href: '#',
    title: 'Left'
};

var dataAll = {
    title: 'Navbars',
    leftNav: [_extends({}, itemLeft, { icon: 'left-nav' })]
};
var React = require('react');

var App = React.createClass({
    displayName: 'App',

    render: function render() {
        return React.createElement('div', dataAll);
    }
});

