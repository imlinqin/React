var React = require('react');
var classNames = require('classnames');

var FlightList = React.createClass({

    render: function () {
        var {className,...props}=this.props;
        return (
            <div className={classNames('intlflight-list privilege',className)}>
                <ul {...props}></ul>
            </div>
        )
    }
});

FlightList.item = React.createClass({

    getDefaultProps:function(){
        return {
            component:'div',
        }
    },

    renderList:function(){

        var {className,href,component,flightDate,onAction,...props}=this.props;
        var Component= href ? 'a' : component;
        var item=flightDate;
        var listactive=onAction;
        return (
           
                                          <li {...props}
                                              className={classNames(className)}>
               <Component className="item-list" onClick={listactive.bind(null,this)}>
                            <span className="time dep">{item[0].depDate}</span>
                            <span className="airport dep"><em className="airport-name">{item[0].arriveTerminal}</em><em className="terminal">T2</em></span>
                            <span className="time arrive">{item[1].arriveDAte}<em>+1</em></span>
                            <span className="airport arrive"><em className="airport-name">{item[item.length-1].arriveTerminal} </em><em className="terminal">T4</em></span>
                            <div className="change-info">
                                <span className="change-num">
                                    转<em>{item.length-1}</em>次
                                </span>
                                <i className="change-sym"></i>
                                <span className="change-city">{item[0].arriveTerminal}</span>
                            </div>
                            <span className="price">
                                ¥<em>
                                 {this.sum(item,'price')}
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

                                              <div className="item-detail">
                               <div className="item-link">
                                              {item.map(this.renderListDetail)}
                                                </div></div>
                        <div className="item-detail active" style={{display:'none'}}>
                            <div className="item-link a_selectflight">
                                <div className="detail-list ">
                                    <span className="line-sign"></span>
                                    <span className="subtime dep"></span>
                                    <span className="subairport dep"><em className="airport-name" title="CN">广州新白云机场</em><em className="terminal"></em></span>
                                    <span className="subtime arrive" title="2016/7/27 17:00:00">17: 00<em></em></span>
                                    <span className="subairport arrive"><em className="airport-name" title="VN">新山一机场</em><em className="terminal">T2</em></span>
                                    <div className="subinfobox">
                                        <span className="subinfo">
                                            越航 VN503
                                        </span>
                                        <span className="subinfo">
                                            机型：321
                                        </span>
                                        <span className="subinfo">
                                            时长：2: 45
                                        </span>
                                    </div>
                                </div>
                                <div className="change-list">
                                    <span>
                                        停留 3h35m  中转地 新山一机场
                                    </span>
                                </div>
                                <div className="detail-list ">
                                    <span className="line-sign"></span>
                                    <span className="subtime dep" title="2016/7/27 15:15:00">
                                        20: 35<em>+1</em>
                                    </span>
                                    <span className="subairport dep"><em className="airport-name" title="VN">新山一机场</em><em className="terminal">T2</em></span>
                                    <span className="subtime arrive" title="2016/7/28 8:15:00">08: 15<em>+1</em></span>
                                    <span className="subairport arrive"><em className="airport-name" title="AU">悉尼机场</em><em className="terminal">T1</em></span>
                                    <div className="subinfobox">
                                        <span className="subinfo">

                                        </span>
                                        <span className="subinfo">
                                            机型：777
                                        </span>
                                        <span className="subinfo">
                                            时长：8: 40
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="privilege-info">
                                <div className="flex-between hd">
                                    <div>
                                        <i className="hui">惠</i><span className="stitle">特惠搭配：</span>
                                    </div>
                                    <a className="more privilege-modal-btn">详情信息</a>
                                </div>
                            </div>
                        </div>
                                          </li>
        
            )
    },
    renderListDetail:function(subItem,index){
        return (
                                <div>
                                    {index>0 ? <div className="change-list">
                                    <span>
                                        停留 2h0m  中转地 墨尔本机场
                                    </span>
                                </div> :null}
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
            )

    },
    //数组求和
    sum:function(item,name){
        var nameSum=0;
        item.map(function(sitem,index){
            return nameSum =   nameSum + Number(sitem[name]);
        })
        return nameSum;
    },
    render: function () {
        var {className,href,component,flightDate,...props}=this.props;
        console.log(flightDate);
        return this.renderList();
    },

});

module.exports = FlightList;