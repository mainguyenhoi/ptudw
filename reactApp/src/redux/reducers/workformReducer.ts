import { ActionReducerMapBuilder, createReducer } from "@reduxjs/toolkit";
import { WorkFormAction } from "@redux/actions";
import { WorkFormConstant } from "@redux/actions/constants";
import build from "@date-io/date-fns";
const {WORK_FORM_SUBMIT} = WorkFormConstant;
const {WorkForm} = WorkFormAction;
const initialState = {
    loading: false,
    error: null,
    isAuth: false,
    response: {}
};
const WorkFormReducer = createReducer(initialState, (builder)=> {
    builder.addCase(WorkForm, (state, data)=>{
        console.log("redux reducer da chay");
        console.log(data)
        return{
            loading: true,
            error: null,
            isAuth: false,
            response:{}
            
        }
    })
})
export default WorkFormReducer;