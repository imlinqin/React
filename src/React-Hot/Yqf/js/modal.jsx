var React = require('react');
var ReactDOM = require('react-dom');
var classNames =require('classnames');



var Modal = React.createClass({
	displayName: 'Modal',
	propTypes: {
		autofocusFirstElement: React.PropTypes.bool,
		backdropClosesModal: React.PropTypes.bool,
		className: React.PropTypes.string,
		isOpen: React.PropTypes.bool,
		onCancel: React.PropTypes.func,
		width: React.PropTypes.oneOfType([
			React.PropTypes.oneOf(['small', 'medium', 'large']),
			React.PropTypes.number,
		]),
	},
    getInitialState: function () {
        return {bgState:false}
    },
	getDefaultProps () {
		return {
			width: 'medium',
		};
	},
    componentDidMount() {
		//if (!canUseDOM) return;
		let p = document.createElement('div');
		document.body.appendChild(p);
		this.portalElement = p;
        //this.componentDidUpdate();
		this.componentDidUpdate();
          var  c = document.createElement('div');
        	c.className = "popup-overlay";
        	this.c = c;
        //	console.log(c);
        this.portalElement.appendChild(c);
	},
	componentDidUpdate() {
	    //	if (!canUseDOM) return;
	    ReactDOM.render(this.renderDialog(), this.portalElement);
	    var that = this;
        if (this.props.isOpen) {
            //   console.log(this.c);
            this.c.className = 'popup-overlay modal-overlay-visible';
            this.portalElement.firstChild.style.display = 'block';

            //    console.log(this.c);
            //    this.portalElement.firstChild.className = 'popup modal-in';
            setTimeout(function () {
                //  console.log(ele);
                that.portalElement.firstChild.className = 'popup flight-fliter popup-mini modal-in';
            }.bind(this), 20);
        }
        if (this.c) {
            if(!this.props.isOpen){
                this.c.className = 'popup-overlay';
              //   console.log('222');
                that.portalElement.firstChild.className = 'popup flight-fliter popup-mini modal-out';
                 setTimeout(function () {
                 
                     that.portalElement.firstChild.className = 'popup';
                     that.portalElement.firstChild.style.display = 'none';
            }.bind(this), 200);
            }
        }
       
       //  console.log(this.c);
	   

	    
	},
	componentWillUnmount() {
		//if (!canUseDOM) return;
	    document.body.removeChild(this.portalElement);
	},
	componentWillReceiveProps: function(nextProps) {
	//if (!canUseDOM) return;
		if (!this.props.isOpen && nextProps.isOpen) {
			// setTimeout(() => this.handleAccessibility());
			document.body.style.overflow = 'hidden';
		} else if (this.props.isOpen && !nextProps.isOpen) {
			// setTimeout(() => this.removeAccessibilityHandlers());
			document.body.style.overflow = null;
		}
	},
	settime: function (ele) {
	   
	},
	handleClose () {
	    this.props.onCancel();
        
	},

	renderDialog() {
	  //  if (!this.props.isOpen) return;
	
	  //  var style = { display: this.props.isOpen ? 'block' : 'none' };
        
		return (
			<div className={classNames('popup flight-fliter')} >
				
					{this.props.children}
				
			</div>
		);
	},
	
    render() {
        //console.log(this.props.isOpen);
        if(this.props.isOpen){
        this.bgOpen;}
        var className = classNames('Modal popup', {
            'modal-in': this.props.isOpen,
        }, this.props.className);
     
    //    this.props.isOpen ? document.body.lastElementChild.className = 'popup-overlay modal-overlay-visible' : null;
        return null;
	},
});


Modal.header = React.createClass({
	propTypes: {
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		onClose: React.PropTypes.func,
		showCloseButton: React.PropTypes.bool,
		text: React.PropTypes.string
	},
	handleClose () {
		document.body.style.overflow = null;
		this.props.onClose();
	},
	render() {

		// elements
	    var className = classNames('Modal__header', this.props.className);
	   // console.log(this.props.showCloseButton);
		var close = this.props.showCloseButton ? <button type="button" onClick={this.handleClose} className="Modal__header__close" /> : null;
		var text = this.props.text ? <h4 className="Modal__header__text">{this.props.text}</h4> : null;
		return (
			<div {...this.props} className={className}>
                <div>123</div>
				{close}
				{text}
				{this.props.children}
			</div>
		);
	}
});
Modal.body = React.createClass({

	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},
	render() {
		var className = classNames('Modal__body', this.props.className);
		return <div {...this.props} className={className} />;
	}
});


// expose the children to the top level export
		module.exports =Modal;

