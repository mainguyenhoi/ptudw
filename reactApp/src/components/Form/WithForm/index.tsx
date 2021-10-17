import React from "react";

interface WithForm {
    labelCol?: string,
    contentCol?: string,
    label: string | JSX.Element,
    children: JSX.Element,
    isRequired?: boolean
}

export default (props: WithForm) => {


    const {labelCol, contentCol, label, children, isRequired} = props;

    const requiredLabel = isRequired ? (
        <span className="text-danger">(*)</span>
    ) : '';


    return (
        <div className="form-group row">
            <label className={`${labelCol ? labelCol : 'col-sm-2'} col-form-label`}>
                {label} {requiredLabel}
            </label>
            <div className={`${contentCol ? contentCol : 'col-sm-10'}`}>
                {children}
            </div>
        </div>
    )
}