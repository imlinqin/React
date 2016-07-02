'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./Container.jsx');
var Navbar = require('./Navbar.jsx');
var FancyCheckbox = require('./other.jsx');
var Badge = require('./Badge.jsx');
var List = require('./List2.jsx');
var Field = require('./Field.jsx');
var App = React.createClass({
    displayName: 'App',

    getInitialState: function getInitialState() {
        return { valueaa: 'Hello!' };
    },

    handleClick: function handleClick() {
        //     this.refs.myTextInput.focus();
        console.log(this.refs.myTextInput.value);
    },
    textmy: function textmy(event) {
        this.setState({ valueaa: event.target.value });
    },
    render: function render() {
        var itemLeft = {
            href: '#',
            title: 'Left'
        };

        var itemRight = {
            href: '#',
            title: 'Right'
        };
        var abc = ['aa', 'bb', 'cc'];
        var dataAll = {
            title: 'Navbar',
            leftNav: [_extends({}, itemLeft, { icon: 'left-nav' })],
            rightNav: [itemLeft, itemRight]
        };

        var dataLeft = {
            title: 'Navbar',
            leftNav: [_extends({}, itemLeft, { icon: 'left-nav' })]
        };
        var img = React.createElement('img', { width: '32', src: 'http://lorempixel.com/128/128/people/' });
        var img80 = React.createElement('img', { width: '80', src: 'http://lorempixel.com/160/160/people/' });
        var img40 = React.createElement('img', { width: '48', src: 'http://lorempixel.com/160/160/people/' });
        var badge1 = React.createElement(
            Badge,
            { rounded: true, amStyle: 'alert' },
            '5'
        );
        var albums = [{
            title: '女爵',
            subTitle: '发行公司：环球唱片',
            after: '2006-12',
            href: 'http://music.163.com/#/album?id=31308',
            desc: '\n      她坦白了我们所虚伪的 她单纯了我们所复杂的wssswedde\n      五年以来…\n      5年的等待，是个漫长也是耗损的s过程。\n      看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n      她的声音，她的个性，象徵著无可取代的高ds傲ss、独特的姿态，d\n      这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n      是我们唯一相信且期待杨乃文的理由。'
        }, {
            title: '第一张精选',
            subTitle: '发行公司：滚石唱片',
            after: '2004-01',
            href: 'http://music.163.com/#/album?id=31312',
            desc: '\n        出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的s杨乃文独d唱曲[dd爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[s第凡内早ss餐]的s主题曲《monn river》等好s歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。'
        }, {
            title: 'Silence',
            subTitle: '发行公司：魔岩唱片',
            after: '1999-01',
            href: 'http://music.163.com/#/album?id=31319',
            desc: '所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量'
        }];

        var myabc = this.props.myabc;

        return React.createElement(
            Container,
            null,
            React.createElement(Navbar, { title: '这是默认' }),
            myabc,
            React.createElement(Navbar, dataAll),
            React.createElement(
                Navbar,
                { customerState: true, linkComponent: '<div>oo,haha</div>' },
                React.createElement(
                    'a',
                    { className: 'icon-other', href: '#' },
                    '左边'
                ),
                React.createElement(
                    'h2',
                    null,
                    '定义内容'
                ),
                React.createElement(
                    'a',
                    { className: 'icon-other', href: '#' },
                    '右边'
                )
            ),
            React.createElement(
                'div',
                null,
                React.createElement('input', { type: 'text', ref: 'myTextInput', value: this.state.valueaa, onChange: this.textmy }),
                React.createElement('input', { type: 'button', value: 'Focus the text input', onClick: this.handleClick })
            ),
            React.createElement(
                'div',
                null,
                React.createElement(
                    Badge,
                    null,
                    'haha'
                )
            ),
            React.createElement(
                FancyCheckbox,
                { checked: true, onClick: console.log.bind(console) },
                'Hello world!',
                React.createElement(
                    'p',
                    null,
                    'sdf'
                )
            ),
            React.createElement(Field, { label: 'Password',
                placeholder: 'Yout password.',
                type: 'password' }),
            React.createElement(
                Field,
                { type: 'select',
                    label: 'Select' },
                React.createElement(
                    'option',
                    { value: 'm' },
                    'Male'
                ),
                React.createElement(
                    'option',
                    { value: 'f' },
                    'Female'
                )
            ),
            React.createElement(Field, { label: 'Range',
                type: 'range',
                defaultValue: '10' }),
            React.createElement(
                List,
                null,
                React.createElement(
                    List.Item,
                    { role: 'header' },
                    'A'
                ),
                React.createElement(List.Item, { after: badge1,
                    title: 'List Item 1' }),
                React.createElement(List.Item, { after: React.createElement(
                        Badge,
                        { rounded: true, amStyle: 'success' },
                        'ok'
                    ),
                    title: 'List Item 2'
                }),
                React.createElement(List.Item, {
                    title: 'List Item 3'

                }),
                React.createElement(List.Item, {
                    title: 'List Item 4'
                }),
                React.createElement(
                    List.Item,
                    { role: 'header' },
                    'B'
                ),
                React.createElement(List.Item, { title: 'List Item 1', desc: '哈s啊未发货s我ee的猜哦es' }),
                React.createElement(List.Item, { title: 'List Item 2' }),
                React.createElement(List.Item, { title: 'List IteSSm 3' }),
                React.createElement(
                    List.Item,
                    { role: 'header' },
                    'C'
                ),
                React.createElement(List.Item, { title: 'List Item 1' }),
                React.createElement(List.Item, { title: 'List Item 2' }),
                React.createElement(List.Item, { after: 'After', title: 'List Itdem 3' })
            ),
            React.createElement(
                List,
                null,
                albums.map(function (album, i) {
                    return React.createElement(List.Item, _extends({}, album, { target: '_blank', media: img40, key: i, href: i === 0 ? null : album.href }));
                })
            ),
            abc
        );
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

