var React = require('react');
var classNames = require('classnames');

var Tabs = React.createClass({

    getDefaultProps: function () {
        return {

        }
    },
    //
    getInitialState: function () {
        return {
            activeKey: this.getDefaultActiveKey()
        }

    },
    //
    getDefaultActiveKey: function () {
        
        var active = this.props.activeKey != null ? this.props.activeKey : 0;
        return active;
    },
    handleClick: function (index, e) {
        //    e.preventDefault();
        console.log('index',index);
        console.log('index',e);
        var activeKey = this.state.activeKey;
        if (activeKey !== index) {
            this.setState({
                activeKey: index,
            });
        }

    }

    ,//
    //
    renderNav: function () {
        var active = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
        var that=this;
        var navs = React.Children.map(this.props.children, function (child, index) {
         //   console.log('child',this);
            return <li key={index} onClick={that.handleClick.bind(null,index,child)} className={classNames('tab-link',{ 'active': active == index }) }><a href="#" className="tab-link">{child.props.title}</a></li>

        });
        return <ul className="filter-menu">{navs}</ul>
    },//
    renderContent: function () {
        var active = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
        var panels = React.Children.map(this.props.children, function (child, index) {
            var {className, children,...props}=child.props;
            return <Tabs.Item key={'tabs' + index} className={classNames(className,{'active':active===index})}>{children}</Tabs.Item>;
        });
        return <div className={'filter-content'}><div className='tabs'>{panels}</div></div>
    },//

    render:function(){
        var {className,...props}= this.props;
        return     <div {...props}
                        className={classNames(className)}>
            {this.renderNav()}
            {this.renderContent()}
        </div>

    }
})

Tabs.Item= React.createClass({
    //
    render:function(){
        var {className, children,...props}=this.props;
        return <div className={classNames('tab tab-intl-time list-block',className)}>{children}</div>
    }
});

module.exports = Tabs;