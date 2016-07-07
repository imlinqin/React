var React = require('react');
var classNames = require('classnames');

var FlightList = React.createClass({

    render: function () {
        var {className,...props}=this.props;
        return (
            <div className={classNames('intlflight-list privilege',className)}>
                <ul  {...props}></ul>
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



    render: function () {
        var {className,href,...props}=this.props;
        var component= href ? 'a' : component ;
        return(
            <li  {...props}
        className={classNames(className)}>
                        <Component className="item-list">
                            <span className="time dep">15: 15</span>
                            <span className="airport dep"><em className="airport-name">广州新白云机场</em><em className="terminal"></em></span>
                            <span className="time arrive">08: 15<em>+1</em></span>
                            <span className="airport arrive"><em className="airport-name">悉尼机场</em><em className="terminal">T1</em></span>
                            <div className="change-info">
                                <span className="change-num">
                                    转<em>1</em>次
                                </span>
                                <i className="change-sym"></i>
                                <span className="change-city">胡志明市</span>
                            </div>
                            <span className="price">¥<em>4646</em></span>
                            <span className="tax">全程含税价</span>
                            <div className="infobox">
                                <span className="info">
                                    <img className="air-ico vam" />越航 VN503 机型：321
                                </span>
                                <em className="show-swith">
                                    详情
                                </em>
                                <span className="alltime"><i className="icon-clock"></i>15h0m   17</span>
                            </div>
                            <em className="hui-angle"><i>惠</i></em>
                        </Component>
                        <div className="item-detail active">
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

});

module.exports = FlightList;