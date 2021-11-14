import { takeEvery, all, fork } from "@redux-saga/core/effects";
import { DateOffService } from "@src/services";
import { useDispatch } from "react-redux";
import {DateOffConstant} from "../actions/constants" 
const {FETCH_DATE_OFF_LIST} = DateOffConstant;
function* fetchLsDateOff (data) {
    console.log("Day la redux-saga dateOff");
    try{
         const respoonse = yield DateOffService.fetchDateOffList();
         if(respoonse == "Success"){
            alert("Gửi thành công");
         } else {
            alert("Lỗi kết nối, vui lòng thử lại");
         }
    } catch (error){
        console.log(console);
    }
}
function* watchDateOff() {
    console.log("day la saga");
    yield takeEvery(FETCH_DATE_OFF_LIST, fetchLsDateOff);
}

export default function* dateOffSaga() {
    yield all([fork(watchDateOff)]);
}
