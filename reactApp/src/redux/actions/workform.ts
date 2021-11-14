import { createAction } from "@reduxjs/toolkit";
import {WorkFormConstant} from "./constants/index"
const {WORK_FORM_SUBMIT} = WorkFormConstant;
export const WorkForm = createAction(WORK_FORM_SUBMIT, (payload)=>{
    console.log(payload);
    return {payload}; 
});
