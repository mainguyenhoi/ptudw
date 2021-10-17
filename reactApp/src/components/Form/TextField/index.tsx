import React from 'react';
import * as CSS from 'csstype';

const customStyle = {
    error: {
        borderColor: '#ed5565',
    },
};

interface TextFieldInterface {
    label: string,
    onChange?: (data: any) => void,
    name: string,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    isRequired?: boolean,
    isError?: boolean,
    style?: CSS.Properties,
    type: string,
    className?: {
        label: string,
        input: string,
    }
}
const TextFieldComponent: React.FC<TextFieldInterface> = (props) => {
    const {
        label,
        onChange,
        name,
        value,
        placeholder,
        disabled,
        isRequired,
        isError,
        style,
        type,
        className,
    } = props;
    const requiredLabel = isRequired ? (
        <span className="text-danger">(*)</span>
    ) : '';

    const inputStyle = isError ? customStyle.error : {};

    return (
        <>
            <div className="form-group row" style={style}>
                <label className={`${className?.label} col-form-label`}>
                    {label} {requiredLabel}
                </label>
                <div className={`${className?.input} `}>
                    <input
                        name={name}
                        type={type}
                        className="form-control"
                        value={value}
                        placeholder={placeholder}
                        disabled={disabled}
                        onChange={onChange ? ({target}) => onChange(target) : undefined}
                        style={inputStyle}
                    />
                </div>
            </div>
        </>
    );
};

TextFieldComponent.defaultProps = {
    type: 'text',
    className: {
        label: 'col-sm-2',
        input: 'col-sm-10',
    },
};

export const TextField = React.memo(TextFieldComponent);


