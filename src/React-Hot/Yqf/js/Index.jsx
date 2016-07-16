var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./Container.jsx');
var NavBar = require('./NavBar.jsx');
var ToolBar = require('./ToolBar.jsx');
var Switch = require('./Switch.jsx');
var SubBar = require('./SubBar.jsx');
var FlightList = require('./FlightList.jsx');
//var Accordion = require('./Accordion.jsx');

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
    bb: function () {
        var cc = '22'
    }

};
const dataAll = {
    title: 'Navbar',
    leftNav: [{...itemLeft, icon: 'left-nav'}],
rightNav: [itemRight],
    onAction: clickHandler,
    };
// 机票数据
const flightDate=[
    [
        [

{
    depDate:'12:35',
    arriveDAte:'18:11',
    depTerminal:'悲观新白云机场',
    arriveTerminal:'阳江坡樟宜机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3689',
    tax:'269',
    monetaryUnit:'&yen;',

},

{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3001',
    tax:'289',
    monetaryUnit:'&yen;',
},
{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3000',
    tax:'289',
    monetaryUnit:'&yen;',
},

        ],[

{
    depDate:'12:35',
    arriveDAte:'18:11',
    depTerminal:'广州新白云机场',
    arriveTerminal:'新加坡樟宜机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3689',
    tax:'269',
    monetaryUnit:'&yen;',

},

{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3001',
    tax:'289',
    monetaryUnit:'&yen;',
},
{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3000',
    tax:'289',
    monetaryUnit:'&yen;',
},

        ]],[

{
    depDate:'12:35',
    arriveDAte:'18:11',
    depTerminal:'广州新白云机场',
    arriveTerminal:'新加坡樟宜机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3689',
    tax:'269',
    monetaryUnit:'&yen;',

},

{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3001',
    tax:'289',
    monetaryUnit:'&yen;',
},
{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'阿富汗机场',
    arriveTerminal:'巴黎新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3200',
    tax:'279',
    monetaryUnit:'&yen;',
},

        ],
         [
        [

{
    depDate:'12:35',
    arriveDAte:'18:11',
    depTerminal:'悲观新白云机场',
    arriveTerminal:'阳江坡樟宜机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3689',
    tax:'269',
    monetaryUnit:'&yen;',

},

{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3001',
    tax:'289',
    monetaryUnit:'&yen;',
},
{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3000',
    tax:'289',
    monetaryUnit:'&yen;',
},

        ],[

{
    depDate:'12:35',
    arriveDAte:'18:11',
    depTerminal:'广州新白云机场',
    arriveTerminal:'新加坡樟宜机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3689',
    tax:'269',
    monetaryUnit:'&yen;',

},

{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3001',
    tax:'289',
    monetaryUnit:'&yen;',
},
{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3000',
    tax:'289',
    monetaryUnit:'&yen;',
},

        ]],
        [

{
    depDate:'12:35',
    arriveDAte:'18:11',
    depTerminal:'广州新白云机场',
    arriveTerminal:'新加坡樟宜机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'4000',
    tax:'269',
    monetaryUnit:'&yen;',

},

{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3001',
    tax:'289',
    monetaryUnit:'&yen;',
},
{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'阿富汗机场',
    arriveTerminal:'巴黎新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'3200',
    tax:'279',
    monetaryUnit:'&yen;',
},

        ],[

{
    depDate:'12:35',
    arriveDAte:'18:11',
    depTerminal:'广州新白云机场',
    arriveTerminal:'新加坡樟宜机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'200',
    tax:'269',
    monetaryUnit:'&yen;',

},

{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'新加坡樟宜机场',
    arriveTerminal:'美国新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'2',
    tax:'289',
    monetaryUnit:'&yen;',
},
{
    depDate:'14:35',
    arriveDAte:'18:11',
    depTerminal:'阿富汗机场',
    arriveTerminal:'巴黎新白云机场',
    airline:{logo:'http://airlineico.b0.upaiyun.com/TZ.png!16x16',name:'国泰航空'},
    flightNo:'A380',
    flightTime:'8h3m',
    price:'1',
    tax:'279',
    monetaryUnit:'&yen;',
},

        ]];

flightDate.map(function(item,index){
    if(item[0] instanceof  Array ) {
        console.log('Array')
    }
    else  if(item[0] instanceof  Object ) {
        console.log('Object')
    }
    console.log(item[0]);
});

var App = React.createClass({

    getInitialState: function () {
        return { selected: 'home',listActive:false, price:true}

    },

    ToolBarHanderClick: function (key, e) {
        //   console.log(e);
        if(key==='price'){
            this.setState({price:!this.state.price})
        }
        this.setState({
            selected: key
        });
    },
    customerClick: function () {
        console.log("344")

    },
    handleSwitcha: function (e) {
        //  console.log(e.getValue());
        // console.log(e);
        PubSub.publish('listtax');

    },
    flightClick:function(e){
        console.log(e)

    },
    getInitialState: function () {
        return {
            left: 0,
            num: 0,
            abc: 'a',
            donghua: false
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
    this.pubsub_token = PubSub.subscribe('sort', function () {
             this.setState({
        price: !this.state.price,
        })
    }.bind(this));
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
    render: function () {
         var that = this;
        var flightDateSort= function(){
           
            var priceSort= flightDate.sort(function(a,b){
                if (!a[0].price) {
                    a[0].price=  a[0][0].price
                }
                if (!b[0].price) {
                    b[0].price=  b[0][0].price
                }
                return a[0].price - b[0].price;
            });
                return that.state.price ? priceSort : priceSort.reverse() ;
        
        }
        var abc=this.flightClick;
        return (
            <Container>
                <NavBar {...dataAll}></NavBar>
                <ToolBar onAction={this.ToolBarHanderClick}>
                    <ToolBar.Item icon="filter" title="筛选" eventKey="home"
                                  active={this.state.selected ==='filter' } />
                    <ToolBar.Item icon="price" href='#' title="低价优先" active={this.state.selected ==='price' }
                                  eventKey="price" />
                    <ToolBar.Item icon="info" title="全程付款" active={this.state.selected ==='tax' }
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
                   
                        {flightDateSort().map(function(item,index){
                            return   <FlightList.item flightDate={item} key={index} index={index} onAction={abc} />
                        })}
                    </FlightList>



                </div>

            </Container>
        );
    }

});

ReactDOM.render(<App />, document.getElementById('root'));
