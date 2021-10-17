import { Field, reduxForm } from 'redux-form';
import React from 'react';
import PropTypes from 'prop-types';
import RenderField from './Field';
import CheckBoxField from './CheckBox';
import { required, email } from './validate';

interface ILoginForm  {
    handleSubmit: any;
    pristine?: boolean;
    invalid?: boolean;
    submitting?: boolean;
}
const LoginForm : React.FC<ILoginForm> = (props) => {
    const {
     pristine, submitting, invalid,handleSubmit
    } = props;


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    className="form-control"
                    placeholder="User Name"
                    name="userName"
                    type="text"
                    fa="fa fa-at"
                    // validate={[required, email]}
                    component={RenderField}
                />
            </div>
            <div>
                <Field
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    type="password"
                    fa="fa fa-key"
                    validate={[required]}
                    component={RenderField}
                />
            </div>
            <div className="text-left">
                <Field
                    name="remember"
                    component={CheckBoxField}
                    type="checkbox"
                    checkboxClass="icheckbox_square-green"
                    increaseArea="20%"
                    cursor="pointer"
                    label="<span className='checkbox-label'> Remember Me </span>"
                />
            </div>
            <button
                type="submit"
                id="btnLogin"
                className="btn btn-primary block full-width m-b"
                disabled={pristine || submitting || invalid}
            >
                Login
      </button>
        </form>
    );
};
export default reduxForm({
    form: 'login_form', // a unique identifier for this form
})(LoginForm);