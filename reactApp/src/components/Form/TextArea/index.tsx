import React from 'react';
import PropTypes from 'prop-types';

const style = {
    error: {
        borderColor: '#ed5565',
    },
};

interface TextAreaProps {
    label: string,
    onChange?: (data: any) => void,
    name: string,
    value?: string,
    placeholder?: string,
    isRequired?: boolean,
    isError?: boolean,
    rows?: number,
}
const TextAreaComponent: React.FC<TextAreaProps> = (props) => {
    const {
        label,
        onChange,
        name,
        value,
        placeholder,
        isRequired,
        isError,
        rows,
    } = props;
    const requiredLabel = isRequired ? (
        <span className="text-danger">(*)</span>
    ) : '';

    const inputStyle = isError ? style.error : {};

    return (
        <>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                    {label}
                    {requiredLabel}
                </label>
                <div className="col-sm-10">
                    <textarea
                        name={name}
                        className="form-control"
                        rows={rows}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange ? ({target}) => onChange(target) : undefined}
                        style={inputStyle}
                    />
                </div>
            </div>
        </>
    );
};

TextAreaComponent.defaultProps = {
    placeholder: '',
    isRequired: false,
    isError: false,
    rows: 5,
};

export const TextArea = React.memo(TextAreaComponent);
