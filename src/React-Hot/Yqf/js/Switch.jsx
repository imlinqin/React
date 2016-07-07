import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';


//require('../scss/components/_switch.scss');


const Switch = React.createClass({


  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    name: PropTypes.string,
    amStyle: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
    onValueChange: PropTypes.func,
  },

  getDefaultProps() {
    return {
      classPrefix: 'switch',
      onValueChange: () => {},
    };
  },

  getValue() {
    return this.refs.field.checked;
  },

  render() {
    const {
      name,
      className,
      onValueChange,
      value,
      disabled,
      ...props
    } = this.props;
    var clickHandler= onValueChange.bind(null,this);
        // console.log(this)
    return (
      <label
        {...props}
        className={classNames('label-switch', className)}
      >

        <input
          onChange={clickHandler}
          name={name}
          type="checkbox"
          ref="field"
          defaultChecked={value}
          disabled={disabled}
        />
        <span className='checkbox' />
      </label>
    );
  }
});
module.exports= Switch;
 
