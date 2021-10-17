import React, { Component } from 'react';
import { Checkbox } from 'react-icheck';
import PropTypes from 'prop-types';

const CheckBoxField = (props) => {
   const  onCheck =(e, checked) =>{
        props.input.onChange(checked);
    }

        return (
            <Checkbox
                name={props.input.name}
                checkboxClass={props.checkboxClass}
                increaseArea={props.increaseArea}
                checked={props.input.checked}
                onChange={onCheck}
                cursor={props.cursor}
                label={props.label}
            />
        );
}

CheckBoxField.propTypes = {
    input: PropTypes.object.isRequired,
    checkboxClass: PropTypes.string.isRequired,
    increaseArea: PropTypes.string.isRequired,
    cursor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default CheckBoxField;