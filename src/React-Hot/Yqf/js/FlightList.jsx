var React = require('react');
var classNames = require('classnames');
var Pubsub = require('pubsub-js');

var FlightList = React.createClass({

    render: function () {
        var {className,...props}=this.props;
        return (
    <div className={classNames('intlflight-list privilege', className) }>
        <ul {...props}></ul>
    </div>
)
    }
});

FlightList.list = React.createClass({
    getDefaultProps: function () {
        return {
            component: 'div',
        }
    },
    onclick: function () {
        PubSub.publish('products', {id:this.props.name,cc:'22'});
  },

    //数组求和
    sum: function(item, name) {
        var nameSum = 0;
        item.map(function (sitem, index) {
            return nameSum = nameSum + Number(sitem[name]);
        })
        return nameSum;
    },
    render: function () {
        var {className, href,index, component, flightdata,onAction,...props}=this.props;
        var item= flightdata;
        var Component = href ? 'a' : component;
        var clickHandle = (typeof index == 'function') ? index : this.handleToggle;

        return (
    <Component className={classNames('item-list') } onClick={this.onclick}>
        <span className="time dep">{item[0].depDate}</span>
        <span className="airport dep"><em className="airport-name">{item[0].arriveTerminal}</em><em className="terminal">T2</em></span>
        <span className="time arrive">{item[1].arriveDAte}<em>+1</em></span>
        <span className="airport arrive"><em className="airport-name">{item[item.length - 1].arriveTerminal} </em><em className="terminal">T4</em></span>
        <div className="change-info">
            <span className="change-num">
                转<em>{item.length - 1}</em>次
            </span>
            <i className="change-sym"></i>
            <span className="change-city">{item[0].arriveTerminal}</span>
        </div>
        <span className="price">
            ¥<em>
                {this.sum(item, 'price') }
            </em>
        </span>

        <span className="tax">全程含税价</span>
        <div className="infobox">
            <span className="info">
                <img className="air-ico vam" src={item[0].airline.logo} />{item[0].airline.name} {item[0].flightNo}
            </span>
            <em className="show-swith">
                详情
            </em>
            <span className="alltime"><i className="icon-clock"></i>{item[0].flightTime}</span>
        </div>
        <em className="hui-angle"><i>惠</i></em>

    </Component>

)
    }

});

FlightList.detail = React.createClass({
componentDidMount: function () {
    this.pubsub_token = PubSub.subscribe('products', function (topic, product) {
        console.log(topic);
        console.log(product);
      this.setState({
        selection: product.id
      });
    }.bind(this));
  },
  componentWillUnmount: function () {
    PubSub.unsubscribe(this.pubsub_token);
  },

    render: function () {
        var {index,flightdata,...props}=this.props;
        //  var subItem= flightdata;
        //console.log(flightdata);
        return (
            <div className={classNames('item-detail') }>
                        <div className="item-link">
                            {flightdata.map(function(subItem,index){
                                return  <div key={index}>
                {index > 0 ? <div className="change-list">
                    <span>
                        停留 2h0m  中转地 墨尔本机场
                    </span>
                </div> : null}
                <div className="detail-list">
                    <span className="line-sign"></span>
                    <span className="subtime dep">{subItem.depDate}</span>
                    <span className="subairport dep"><em className="airport-name" title="CN">{subItem.depTerminal}</em><em className="terminal">T3</em></span>
                    <span className="subtime arrive">{subItem.arriveDAte}<em></em></span>
                    <span className="subairport arrive">
                        <em className="airport-name" title="VN">{subItem.arriveTerminal}</em>
                        <em className="terminal">T2</em>
                    </span>
                    <div className="subinfobox">
                        <span className="subinfo">
                            <img src={subItem.airline.logo} /><i>{subItem.airline.name}</i>
                        </span>
                        <span className="subinfo">
                            {subItem.flightNo}
                        </span>
                        <span className="subinfo">
                            {subItem.flightTime}
                        </span>
                    </div>
                </div>
            </div>
                            })}
                        </div>
                    </div>



        )

    }


});

FlightList.item = React.createClass({


    getInitialState: function () {
        return {
            selected: false,
            selectedDetail: false,
        }

    },
    handleToggle: function () {
        this.setState({
            selected: !this.state.selected,
        })

    },
    handleToggleDetail: function (key) {
        if (this.state.key) {
            this.state.key = false;
        }
        this.setState({
            selectedDetail: !this.state.selectedDetail,
            key: !this.state.key,
        })

    },
    



    render: function () {
        var {className, href,key, component, flightDate,...props} = this.props;
        //console.log(flightDate);
        // return this.renderList();
        var item = flightDate;
        var index=key;
        var isArray = item[0] instanceof Array;
        var isSelect = this.state.selected ? 'active' : null;
        var multiList = [
        <FlightList.list flightdata={item[0]} name='bb' />, <dl className={classNames('item-listbox') }>
    {item.map(function(sitem,index){
    return <dd key={index}>
    <FlightList.list flightdata={sitem} index={index} />
    <FlightList.detail flightdata={sitem} index={index} />
    </dd>
    })}
           
        </dl>];
        var simpList = [
        <FlightList.list flightdata={item} index={index} name='kk' />, <FlightList.detail flightdata={item} index={key} />];

        return <li {...props}
                   className={classNames(className) }>
            { isArray ? multiList : simpList }

        </li>
    },

});



module.exports = FlightList;