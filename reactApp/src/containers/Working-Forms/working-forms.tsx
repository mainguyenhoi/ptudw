import React from "react";
//import formWK from '@components/WorkForm/Form'
import WorkForm from '@components/WorkForm/Form'
import { useDispatch } from "react-redux";
import { WorkFormAction } from "@redux/actions/index"
import  { workForm}  from "../../services/workform"

const WorkingForm: React.FC =  (props) => {
    const dispatch = useDispatch();
    const workform = (data) => {
        console.log(data);
        dispatch(WorkFormAction.WorkForm(data));
    }
    return (
        <div>
            <WorkForm onSubmit={workform}>Phiếu Công Tác</WorkForm>
        </div>
    );
}
export default WorkingForm;