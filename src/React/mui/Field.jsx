
var React = require('react');
var classNames = require('classnames');


var Field = React.createClass({
    PropTypes: {
        classPrefix: React.PropTypes.string.isRequired,
        type: React.PropTypes.string,
        label: React.PropTypes.node,
        btnBefore: React.PropTypes.node,
        btnAfter: React.PropTypes.node,
        labelBefore: React.PropTypes.node,
        labeAfter: React.PropTypes.node,
    },
    getDefaultProps: function () {
        return {
            classPrefix: 'field',
            type: 'text'
        }
    },
    getFielDOMNode: function () {
        return this.refs.field;

    },
    getValue: function () {
        if (this.props.type === 'select' && this.props.multiple) {
            return this.getSelectedOptions();

        }
        else {
            return this.getFieldDOMNode().value;
        }
    },
    getChecked: function () {
        return this.getFieldDOMNode().checked;

    },
    getSelectedOptions: function () {
        var values = [];
        var options = this.getFielDOMNode().getElementsByTagName('option');
        options.forEach(function (option) {
            if (option.selected) {

                var value = option.getAttribute('value') || option.innerHtml;
                values.push(value);
            }
        });
        return values;
    },
    isCheckboxOrRadio() {
        return this.props.type === 'radio' || this.props.type === 'checkbox';
    },
    isFile: function () {
        return this.props.type === 'file';
    },
    renderField: function () {
        var field = null;
        var fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' : '';
        var classes = this.props.className;
        var props = {
            ref: 'field',
            key: 'formField',
            className: classes
        };
        switch (this.props.type) {
            case 'select':
                field = (
                    <select {...this.props} {...props}>
                        {this.props.children}
                    </select>
                    );
                break;
            case 'textarea':
                field = (
                    <textarea {...this.props} {...props} />
                    );
                break;
            default:
                field = (
                    <input {...this.props} {...props} />
                    )
        }
        return field;
    },
    renderContainer: function (children) {
        return this.props.label ? (
            <label htmlFor={this.props.id} className='field-container' key='label'>
                <span className='field-label'>{this.props.label}</span>
                {children}
                {this.isCheckboxOrRadio() ? (<span className='icon icon-check field-icon'></span>) : null}
            </label>
            ) : children;
    },
    renderFieldGroup(children) {
        var groupPrefix = 'field-group';
        var labelClassName = groupPrefix + '-label';
        var {labelBefore,labelAfter,btnBefore,btnAfter,...props}= this.props;
        var renderFiledLabel = function(type){
            return this.props[type] ?(
                <span className={labelClassName} key={type}>{this.props[type]}</span>
                ) :null;
        };
        return labelBefore || labelAfter || btnBefore || btnAfter ? (
            <div className={groupPrefix} key='fieldGroup'>
                {renderFiledLabel('labelBefore')}
                {btnBefore}
                {children}
                {renderFiledLabel('labelAFter')}
                {btnAfter}
            </div>
            ) : children;
    },
    render:function(){
        var field= this.renderField();
        if(this.props.label){
            return this.renderContainer(field);
        }
        return this.renderFieldGroup(field);
    }
});

module.exports= Field;