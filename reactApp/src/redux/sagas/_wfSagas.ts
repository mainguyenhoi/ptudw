import { takeEvery, all, fork } from "@redux-saga/core/effects";
import { WorkFormService } from "@src/services";
import { useDispatch } from "react-redux";
import {WorkFormConstant} from "../actions/constants" 
const {WORK_FORM_SUBMIT} = WorkFormConstant;
function* wfConsoleLog (data) {
    console.log("Day la redux-saga workform");
    try{
         const respoonse = yield WorkFormService.workForm(data);
         if(respoonse == "Success"){
            alert("Gửi thành công");
         } else {
            alert("Lỗi kết nối, vui lòng thử lại");
         }
    } catch (error){
        console.log(console);
    }
}
function* watchWF() {
    console.log("day la saga");
    yield takeEvery(WORK_FORM_SUBMIT, wfConsoleLog);
}

export default function* wfSaga() {
    yield all([fork(watchWF)]);
}
