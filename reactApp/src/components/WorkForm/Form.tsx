import React from 'react'
import RenderField from './Field';
import { Field, reduxForm } from 'redux-form'
import '../../assets/scss/workform.css'
import { render } from '@testing-library/react';
interface IWorkForm {
    handleSubmit: any;
    pristine?: boolean;
    invalid?: boolean;
    submitting?: boolean;
}
const WorkForm: React.FC<IWorkForm> = (props) => {
    const {
        pristine, submitting, invalid, handleSubmit
    } = props;
    return (

        <form onSubmit={handleSubmit}>
            <div className="div-field">
                <h3>{props.children}</h3>
                <div className="div-input">
                    <Field
                        className="form-control"
                        placeholder="Đơn vị"
                        name="unit"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                    <Field
                        className="form-control"
                        placeholder="Địa điểm"
                        name="location"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                </div>
                <div className="div-input">
                    <Field
                        className="form-control"
                        placeholder="Ngày bắt đầu"
                        name="dayStart"
                        type="date"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                    <Field
                        className="form-control"
                        placeholder="Ngày kết thúc"
                        name="dayEnd"
                        type="date"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                </div>
                <Field
                    className="form-control"
                    placeholder="Lý do"
                    name="reason"
                    type="textarea "
                    fa="fa fa-at"
                    component={RenderField}
                />
                <h3>Danh sách nhân viên</h3>
                <div className="div-input">
                    <Field
                        className="form-control"
                        placeholder="Tên nhân viên"
                        name="name1"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                    <Field
                        className="form-control"
                        placeholder="Mã nhân viên"
                        name="userId1"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                </div>
                <div id="in2" className="div-input">
                    <Field
                        className="form-control"
                        placeholder="Tên nhân viên"
                        name="name2"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                    <Field
                        className="form-control"
                        placeholder="Mã nhân viên"
                        name="userId2"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                </div>
                <div id="in3" className="div-input">
                    <Field
                        className="form-control"
                        placeholder="Tên nhân viên"
                        name="name3"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                    <Field
                        className="form-control"
                        placeholder="Mã nhân viên"
                        name="userId3"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                </div>
                <div id="in4" className="div-input">
                    <Field
                        className="form-control"
                        placeholder="Tên nhân viên"
                        name="name4"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                    <Field
                        className="form-control"
                        placeholder="Mã nhân viên"
                        name="userId4"
                        type="text"
                        fa="fa fa-at"
                        component={RenderField}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary" >Submit</button>
            </div>
        </form>
    );
}
export default reduxForm({
    form: 'work_form',
})(WorkForm)