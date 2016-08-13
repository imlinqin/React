var React = require('react');
var ReactDOM = require('react-dom');
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Modal = require('./modal.jsx');
require('./style.css');

var App = React.createClass({



    getInitialState: function () {
        return {
         
            modalIsOpen: false,
        };
    },
    componentWillUpdate: function () {

      
        //  window.cancelAnimationFrame(this.dong);
        //console.log(!this.state.donghua)
    },
    //    shouldComponentUpdate: function(nextProps, nextState) {
    //  return nextState.abc !== this.state.abc;
    //},

    componentDidMount: function () {


    },
    componentWillUnmount: function () {
    },

    toggleModal: function () {

        this.setState({
            modalIsOpen: !this.state.modalIsOpen
            // donghua:false,
        });
    },


    render: function () {

        return (

<div>
        <a onClick={this.toggleModal}>Launch Modal</a>
                        <Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
	                        <Modal.header text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal} />
	                        <Modal.body>sfsdf这d是d内d容</Modal.body>

                        </Modal>

</div>

        );
    }

});



ReactDOM.render(<App />, document.getElementById('root'));
