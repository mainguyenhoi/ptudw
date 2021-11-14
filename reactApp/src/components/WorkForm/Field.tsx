import React from 'react';
import PropTypes from 'prop-types';
const Field = ({
    input, label, placeholder, type, textarea, fa, meta: { touched, error, warning },
}) => (
    
    <div>
        
        {!!label && (<label>{label}</label>)}
        <div className="form-group input-group m-b">
            <input
                className="form-control"
                {...input}
                placeholder={placeholder}
                type={type}
                id={input.name}
            />
        </div>
        {touched && (
            (error
                && (
                    <span className="error">
                        {' '}
                        {error}
                        {' '}
                    </span>
                )
            ) || (warning
                && (
                    <span className="warn">
                        {' '}
                        {warning}
                        {' '}
                    </span>
                )
            )
        )}
    </div>
);

Field.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    fa: PropTypes.string,
    type: PropTypes.string.isRequired,
};

export default Field;