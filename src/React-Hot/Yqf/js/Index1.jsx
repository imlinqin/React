var React = require('react');
var ReactDOM = require('react-dom');
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var renderSubtreeIntoContainer = require("react-dom").unstable_renderSubtreeIntoContainer;

var Container = require('./Container.jsx');
var NavBar = require('./NavBar.jsx');
var ToolBar = require('./ToolBar.jsx');
var Switch = require('./Switch.jsx');
var SubBar = require('./SubBar.jsx');
var FlightList = require('./FlightList.jsx');
var TodoList = require('./TodoList.jsx');
var Modal = require('./Modal.jsx');
var Tabs = require('./Tab.jsx');
//var $ = require('zepto');
//var $ = require('jquery');
//var Accordion = require('../css/StyleSheet.css');
require('./style.css');
//<link href="stylesheet.css" rel="stylesheet" />
var clickHandler = function (e) {
    //e.preventDefault();
    //  console.log(item);
    //    return '222dd2s5'
    // this.setAttribute('id','hah');

    console.log(e);

};



var handleSwitch = function () {
    //  console.log(this.getValue());
    console.log(this);
};
var clickHandlera = function (key, e) {
    // this.setAttribute('id','hah');
    console.log(this);
};

const itemLeft = {
    href: '#',
    // title: 'Left',
    onAction: clickHandler
};
console.log(itemLeft);
const itemRight = {
    href: '#',
    title: 'Right',
    onAction: clickHandler
};
var popupItemRight = {
    href: '#',
    title: '关闭',

};
const dataAll = {
    title: 'Navbar',
    leftNav: [{...itemLeft, icon: 'icon-left'}],
rightNav: [itemRight],
    onAction: clickHandler,
    };
// 机票数据
const flightDate =[
[
    [

        {
            depDate: "12:35",
            arriveDAte: "18:11",
            depTerminal: "悲观新白云机场",
            arriveTerminal: "阳江坡樟宜机场",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国d泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3689",
            tax: "269",
            monetaryUnit: "&yen;",

        },

        {
            depDate: "14:35",
            arriveDAte: "18:11",
            depTerminal: "新 加坡樟宜机场",
            arriveTerminal: "美国新白云机场",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国d泰航 空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3001",
            tax: "289",
            monetaryUnit: "&yen;",
        },
        {
            depDate: "14:35",
            arriveDAte: "18:11",
            depTerminal: "新加坡樟d宜机场",
            arriveTerminal: "美国新白云机场",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰y航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3000",
            tax: "289",
            monetaryUnit: "&yen;",
        },

    ], [

        {
            depDate: "12:35",
            arriveDAte: "18:11",
            depTerminal: "广州新白云机场",
            arriveTerminal: "新加坡樟宜机场",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3689",
            tax: "269",
            monetaryUnit: "&yen;",

        },

        {
            depDate: "14:35",
            arriveDAte: "18:11",
            depTerminal: "新加坡樟宜机场",
            arriveTerminal: "美国新白云机场",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3001",
            tax: "289",
            monetaryUnit: "&yen;",
        },
        {
            depDate: "14:35",
            arriveDAte: "18:11",
            depTerminal: "新加坡樟宜机场",
            arriveTerminal: "美国新白云机场",
            airline: { logo:"http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3000",
            tax: "289",
            monetaryUnit: "&yen;",
        },

    ]], [

    {
        depDate: "12:35",
        arriveDAte: "18:11",
        depTerminal: "广州新白云机场",
        arriveTerminal: "新加坡樟宜机场",
        airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
        flightNo: "A380",
        flightTime: "8h3m",
        price: "3689",
        tax: "269",
        monetaryUnit: "&yen;",

    },

    {
        depDate: "14:35",
        arriveDAte: "18:11",
        depTerminal: "新加坡樟宜机场",
        arriveTerminal: "美国新白云机场",
        airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
        flightNo: "A380",
        flightTime: "8h3m",
        price: "3001",
        tax: "289",
        monetaryUnit: "&yen;",
    },
    {
        depDate: "14:35",
        arriveDAte: "18:11",
        depTerminal: "阿富汗机场",
        arriveTerminal: "巴黎新白云机场",
        airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
        flightNo: "A380",
        flightTime: "8h3m",
        price: "3200",
        tax: "279",
        monetaryUnit: "&yen;",
    },

    ],
[
    [

        {
            depDate: "12:35",
            arriveDAte: "18:11",
            depTerminal: "悲观新白云机场",
            arriveTerminal: "阳江坡樟宜机场",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3689",
            tax: "269",
            monetaryUnit: "&yen;",

        },

        {
            depDate: "14:35",
            arriveDAte: "18:11",
            depTerminal: "新加坡樟宜机场",
            arriveTerminal: "美国新白云机场1",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3001",
            tax: "289",
            monetaryUnit: "&yen;",
        },
        {
            depDate: "14:35",
            arriveDAte: "18:11",
            depTerminal: "新加坡樟宜机场",
            arriveTerminal: "美国新白云机场",
            airline: { logo:"http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3000",
            tax: "289",
            monetaryUnit: "&yen;",
        },

    ], [

        {
            depDate: "12:35",
            arriveDAte: "18:11",
            depTerminal: "广州新白云机场",
            arriveTerminal: "新加坡樟宜机场",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3689",
            tax: "269",
            monetaryUnit: "&yen;",

        },

        {
            depDate: "14:35",
            arriveDAte: "18:11",
            depTerminal: "新加坡樟宜机场",
            arriveTerminal: "美国新白云机场",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3001",
            tax: "289",
            monetaryUnit: "&yen;",
        },
        {
            depDate: "14:35",
            arriveDAte: "18:11",
            depTerminal: "新加坡樟宜机场",
            arriveTerminal: "美国新白云机场",
            airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
            flightNo: "A380",
            flightTime: "8h3m",
            price: "3000",
            tax: "289",
            monetaryUnit: "&yen;",
        },

    ]],
[

    {
        depDate: "12:35",
        arriveDAte: "18:11",
        depTerminal: "广州新白云机场",
        arriveTerminal: "新加坡樟宜机场",
        airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
        flightNo: "A380",
        flightTime: "8h3m",
        price: "4000",
        tax: "269",
        monetaryUnit: "&yen;",

    },

    {
        depDate: "14:35",
        arriveDAte: "18:11",
        depTerminal: "新加坡樟宜机场",
        arriveTerminal: "美国新白云机场",
        airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
        flightNo: "A380",
        flightTime: "8h3m",
        price: "3001",
        tax: "289",
        monetaryUnit: "&yen;",
    },
    {
        depDate: "14:35",
        arriveDAte: "18:11",
        depTerminal: "阿富汗机场",
        arriveTerminal: "巴黎新白云机场",
        airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
        flightNo: "A380",
        flightTime: "8h3m",
        price: "3200",
        tax: "279",
        monetaryUnit: "&yen;",
    },

], [

    {
        depDate: "12:35",
        arriveDAte: "18:11",
        depTerminal: "广州新白云机场",
        arriveTerminal: "新加坡樟宜机场",
        airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
        flightNo: "A380",
        flightTime: "8h3m",
        price: "200",
        tax: "269",
        monetaryUnit: "&yen;",

    },

    {
        depDate: "14:35",
        arriveDAte: "18:11",
        depTerminal: "新加坡樟宜机场",
        arriveTerminal: "美国新白云机场",
        airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
        flightNo: "A380",
        flightTime: "8h3m",
        price: "2",
        tax: "289",
        monetaryUnit: "&yen;",
    },
    {
        depDate: "14:35",
        arriveDAte: "18:11",
        depTerminal: "阿富汗机场",
        arriveTerminal: "巴黎新白云机场",
        airline: { logo: "http://airlineico.b0.upaiyun.com/TZ.png!16x16", name: "国泰航空" },
        flightNo: "A380",
        flightTime: "8h3m",
        price: "1",
        tax: "279",
        monetaryUnit: "&yen;",
    },

]];



var App = React.createClass({

    getInitialState: function () {
        return { selected: 'home', listActive: false, price: true, modalIsOpen: false, }

    },

    ToolBarHanderClick: function (key, e) {
        console.log(e);
        if (key === 'price') {
            this.setState({ price: !this.state.price });
        }
        if (key === 'filter') {
            this.setState({ popup: true });
        }
        this.setState({
            selected: key
        });

        //  console.log(document.body.lastElementChild.className.indexOf('modal-portal'));
    },
    customerClick: function () {
        console.log("344")

    },
    handleSwitcha: function (e) {
        //  console.log(e.getValue());
        // console.log(e);
        PubSub.publish('listtax');

    },
    flightClick: function (e) {
        console.log(e)

    },
    getInitialState: function () {
        return {
            left: 0,
            num: 0,
            abc: 'a',
            donghua: false,
            popup: false,
            flightDate:[]
        };
    },


    componentWillUpdate: function () {


        this.preloaderPlane(true);
        //  window.cancelAnimationFrame(this.dong);
        //console.log(!this.state.donghua)
    },
    //    shouldComponentUpdate: function(nextProps, nextState) {
    //  return nextState.abc !== this.state.abc;
    //},

    componentDidMount: function () {
        console.log('lldd','63');

        $.getJSON("https://raw.githubusercontent.com/imlinqin/React/master/src/React-Hot/Yqf/js/json.js?k4497", function(result) {
                        var lastGist = result[0];

            console.log('ll',result[0]);
            console.log('ll2',flightDate);
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }

        }.bind(this));


        $('.bar').height(49);
        this.pubsub_token = PubSub.subscribe('sort', function () {
            this.setState({
                price: !this.state.price,
            })
        }.bind(this));
        this.node = document.createElement('div');
        var root = document.getElementById('root');
        this.node.className = '__modal-podddrtal';
        document.body.appendChild(this.node);
        //  ReactDOM.render(<TodoList />,root);

    },
    componentWillUnmount: function () {
        PubSub.unsubscribe(this.pubsub_token);
    },

    resolveAnimationFrame: function () {
        var screenWidth = 320;
        //ele.css('left', num / 3 + '%');
        //       if (num / screenWidth > 100 / screenWidth * 3) {
        //           num = 0;
        //       }
        this.state.num += 1;
        if (this.state.num / screenWidth > 100 / screenWidth * 3) {
        }
    },
    preloaderPlane: function (active) {
        var ele = document.getElementById('preloader')
        var num = 0;
        var screenWidth = window.innerWidth;
        var start = requestAnimationFrame(inFnc);
        function inFnc() {
            num++;
            ele.style.left = num / 3 + '%';

            if (num / screenWidth > 100 / screenWidth * 3) {
                num = 0;
            }
            var start = requestAnimationFrame(inFnc);

        };


    },
    clickabc: function () {
        this.setState({
            abc: '3',
            // donghua:false,
        });
    },
    toggleModal: function () {

        this.setState({
            popup: !this.state.popup
            // donghua:false,
        });
    },
    openModal: function (e) {
        if (e) {
            this.setState({
                modalIsOpen: true
            })
        }
    },
    render: function () {
        var that = this;
        var flightDate2= this.state.flightDate;
        console.log('数据',this.state.flightDate);

        var flightDateSort = function () {

            var priceSort = flightDate2.sort(function (a, b) {
                if (!a[0].price) {
                    a[0].price = a[0][0].price
                }
                if (!b[0].price) {
                    b[0].price = b[0][0].price
                }
                return a[0].price - b[0].price;
            });
            return that.state.price ? priceSort : priceSort.reverse();

        }
        var abc = this.flightClick;
        return (
            <Container>
                <NavBar {...dataAll}></NavBar>
                <ToolBar onAction={this.ToolBarHanderClick}>
                    <ToolBar.Item icon="filter" title="筛选" eventKey="filter"
                                  active={this.state.selected === 'filter' } />
                    <ToolBar.Item icon="price" href='#' title="低价优先" active={this.state.selected === 'price' }
                                  eventKey="price" />
                    <ToolBar.Item icon="info" title="全程付款" active={this.state.selected === 'tax' }
                                  eventKey="tax">
                        <Switch onValueChange={this.handleSwitcha} defaultChecked name='uu' />
                        <span className='check-tit' onClick={this.customerClick}>全程付款</span>
                    </ToolBar.Item>
                </ToolBar>
                <SubBar className='bar-preloader outset'>
                    <div className='preloader-hint active'>
                        <a className="open-popup gray6">
                            全程1对1专人服务及每航段均已含延误赔偿高达 ¥<em className="price">1600</em>
                            <i className="icon-hint"></i>
                        </a>
                        <span className="icon-preloader" id='preloader'><i className="subbg"></i></span>
                        <span className="bg">
                            已查询到<em className="number" id="em_searchCount"></em>个低价行程，更多低价加载中...
                        </span>
                    </div>
                </SubBar>
                <div className='content' onClick={this.clickabc}>
                    <div className="next-flight-title">
                        <span className="flight-leg">去</span>
                        <span>2016-07-27 周三</span>
                        <i className="ml5">广州 -悉尼</i>
                    </div>
                    <FlightList>

                        {flightDateSort().map(function (item, index) {
                            return <FlightList.item flightDate={item} key={index} index={index} onAction={abc} />
                        }) }
                    </FlightList>

                    <a onClick={this.toggleModal}>Launch Modal</a>
                    <Modal className='flight-fliter popup-mini' isOpen={this.state.popup} onCancel={this.toggleModal} backdropClosesModal>
                        <NavBar title='筛选' rightNav={[{...popupItemRight, onAction:this.toggleModal}]}></NavBar>
                    <div className="subbar flex-between">
                        <div className="subtitle">仅看直飞</div>

                    </div>
                    <div className="popup-inner content ">




                        <Tabs>
                            <Tabs.Item title='起飞时间' className="time">

                                <ul>
                                    <li className="item-divider">出发时间</li>
                                    <li className="item-content">
                                        <input className="label-radio" type="checkbox" value="" name="cb_DepartureDate" />
                                        <div className="item-inner">
                                            不限
                                        </div>
                                    </li>
                                    <li className="item-content">
                                        <input className="label-radio" type="checkbox" value="3" name="cb_DepartureDate" />
                                        <div className="item-inner">
                                            下午（12: 00-18: 00）
                                        </div>
                                    </li>
                                    <li className="item-content">
                                        <input className="label-radio" type="checkbox" value="4" data-segref="1" name="cb_DepartureDate" />
                                        <div className="item-inner">
                                            夜晚（18: 00-24: 00）
                                        </div>
                                    </li>
                                    <li className="item-content">
                                        <input className="label-radio" type="checkbox" value="1" data-segref="1" name="cb_DepartureDate" />
                                        <div className="item-inner">
                                            凌晨（00: 00-06: 00）
                                        </div>
                                    </li>

                                    <li className="item-divider">抵达时间</li>

                                </ul>

                            </Tabs.Item>
                            <Tabs.Item title='航班筛选' className="abc">

                                <ul>
                                    <li className="item-divider">出发时间</li>
                                    <li className="item-content">
                                        <input className="label-radio" type="checkbox" value="" name="cb_DepartureDate" />
                                        <div className="item-inner">
                                            不限
                                        </div>
                                    </li>
                                    <li className="item-content">
                                        <input className="label-radio" type="checkbox" value="3" name="cb_DepartureDate" />
                                        <div className="item-inner">
                                            下午（12: 00-18: 00）
                                        </div>
                                    </li>
                                    <li className="item-content">
                                        <input className="label-radio" type="checkbox" value="4" data-segref="1" name="cb_DepartureDate" />
                                        <div className="item-inner">
                                            夜晚（18: 00-24: 00）
                                        </div>
                                    </li>
                                    <li className="item-content">
                                        <input className="label-radio" type="checkbox" value="1" data-segref="1" name="cb_DepartureDate" />
                                        <div className="item-inner">
                                            凌晨（00: 00-06: 00）
                                        </div>
                                    </li>

                                    <li className="item-divider">抵达时间</li>

                                </ul>

                            </Tabs.Item>
                        </Tabs>


                    </div>


                    </Modal>


                </div>




            </Container>
        );
}

});


//end

var Radio = React.createClass({
    getInitialState:function(){
        return {value:{'A':true,'B':false,'C':false,'D':false}
        }},
    handleChange: function (valuebefore,value,infinite,event) {
        //    console.log('hh2',event.target.value);
        console.log('abcd',valuebefore)
        if (this.props.onAction) {
            this.props.onAction(valuebefore,value,infinite);
        }

        //  valuebefore[value]=!valuebefore[value];
        //console.log('abc',valuebefore)
        //this.setState({
        //    value: valuebefore
        //});
    },
    render:function(){
        var children = [];
        var valuebefore = this.props.defaultRadio  ;
        //   var onAction= this.props.onChange;
        var cc = {'A':true,'B':true,'C':true};
        if('B' in cc){

        }
        var zhi=false;
        React.Children.forEach(this.props.children, function (child, i) {

            var {type,title,value,name,infinite,...props}= child.props;


            if(value in valuebefore){

                var zhi=valuebefore[value];
            }



            var label = <label>
                <input type={type}
                       name={name}
                       value={value}
                       checked={zhi}
                       onChange={this.handleChange.bind(this,valuebefore,value,infinite)} />
                {title}
            </label>;

            children.push(label);
        }.bind(this));

        return <div>{children}</div>;
    }
});

var MyForm = React.createClass({
    getInitialState:function(){
        return {myradio:{'A':true,'B':true,'C':true,'D':false}
        }
    },//
    handleChange:function(valuebefore,value,infinite){
        //   console.log('hh1',event.target.value);
        if(infinite&& valuebefore[value] ==false ){
            for(var svale in valuebefore){
                valuebefore[svale] = false;
            }
            valuebefore[value]= true;
        }
        else{
            valuebefore[value]=!valuebefore[value];
            valuebefore['D']= false;
        }
        this.setState({
            myradio:valuebefore
        })
    },//
    render:function(){
        return <Radio onAction={this.handleChange} defaultRadio={this.state.myradio}>
    <input type='checkbox' value='A' title='我的算法' name='AA' />
    <input type='checkbox' value='B' title='这是B' name='BB' />
    <input type='checkbox' value='C' title='这是C' name='CC' />
    <input type='checkbox' value='D' title='不限' name='DD' infinite />
        </Radio>

    }

});



ReactDOM.render(<App />, document.getElementById('root'));
