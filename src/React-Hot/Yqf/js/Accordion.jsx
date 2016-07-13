var React = require('react');
var  classNames = require('classnames') ;
var Accordion = React.createClass({

    propTypes: {
        classPrefix: React.PropTypes.string,
        activeKey: React.PropTypes.any,
        defaultActiveKey: React.PropTypes.any,
        inset: React.PropTypes.bool,
        onAction:React.PropTypes.func,
    },
    getDefaultProps: function () {
        return {
            classPrefix: 'accordion'
        };
    },
    getInitialState: function () {
        return {
            activeKey: this.props.defaultActiveKey || null
        };
    },
    shouldComponentUpdate: function () {
        return !this._isChanging;
    },
    handleSelect: function (e, key) {
        e.preventDefault();
        if (this.props.onAction) {
           this._isChanging = true;
        //  this.props.onAction(key);
           this._isChanging = false;
        }

        if (this.state.activeKey === key) {
           key = null;
        };
        this.setState({
           activeKey:key
        })
    },
    renderItems: function () {
        var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
        var that=this;
        return React.Children.map(this.props.children, function (child,index) {
            var {eventKey,} = child.props; 
            var props = {key:index,onAction:that.handleSelect,}
       

        if(eventKey === undefined ){
         props.eventKey = eventKey = index;
        }
        props.expanded = eventKey === activeKey;
        props.abc = eventKey === activeKey;
        return React.cloneElement(child,props);
      })
    },
    render:function(){
       
        return (
            <section {...this.props} className='accordion'>
                {this.renderItems()}
            </section>
            )
    
    
    },
})
Accordion.Item= React.createClass({
    propTypes:{
        title:React.PropTypes.node,
        eventKey:React.PropTypes.any,
    },
        getInitialState: function () {
        return {
            selected: false,
            expanded:false,
        };
    },
    handleClick:function(e){
        //e.persist();
        //e.selected = true;
        console.log(e);
        if(this.props.onAction){
            this.props.onAction(e,this.props.eventKey);
          //  console.log(this.props.onAction);
        }
        else {
          e.preventDefault();
        }
       // if(e.selected){
            this.handleToggle();
       // }
    },
    handleToggle:function(){
        this.setState({
            expanded: !this.state.expanded
        });
        
    },
    //getCollapsibleDimensionValue(){
    //    return this.refs.panel.scrollHeight;
    //},
    //getCollapsibleDOMNode(){
    //    if (!this.isMounted() || !this.refs || this.refs.panel   ){
    //        return null;
    //    }
    //    return this.refs.panel;
    
    //},
    render:function(){
        return (
                <dl className={classNames('accordion-item',this.state.expanded ? 'active' : null)}>
                        <dt onClick={this.handleClick} className='accordion-title'>
                            {this.props.title}

                        </dt>
                    <dd className={classNames('accordion-body')} ref='panel'>
                            <div className='accordion-content'>
                                {this.props.children}
                            </div>

                    </dd>
                        
                </dl>
            )
        
    }

})
module.exports= Accordion;
