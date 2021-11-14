import {all, fork} from 'redux-saga/effects';
import userSaga from './user';
import wfSaga from './_wfSagas';
export default function* rootSaga() {
    yield all([fork(userSaga)]);
    yield all([fork(wfSaga)]);
}