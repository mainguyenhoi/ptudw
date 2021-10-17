import {all, call, put, takeEvery, fork} from 'redux-saga/effects';
import {toastr} from 'react-redux-toastr';
import {UserService} from '@services';
import {UserAction} from '../actions';
import {UserConstant} from '../actions/constants';
import {LocalStorageConstant} from '@constants';
import {AAD_LOGOUT_CLICK} from '@redux/actions/constants/user';

const {IS_AUTH, AUTHORITY} = LocalStorageConstant;


const {AAD_LOGIN_PENDING, AAD_LOGIN_CLICK, AAD_LOGIN_FAILED, AAD_LOGIN_SUCCESS} = UserConstant;

function* login(data) {
    try {
        yield put(UserAction.loginPending());
        const response = yield UserService.login(data.payload);
        const {token, expiresIn} = response.data;

        localStorage.setItem(IS_AUTH, "true");
        localStorage.setItem(AUTHORITY, JSON.stringify({accessToken: token, expiresIn}));

        toastr.success('Success!');
        yield put(UserAction.loginSuccess());
    } catch (error) {
        toastr.error('Invalid username or password');
        yield put(UserAction.loginFailed(error));

        localStorage.removeItem(IS_AUTH);
        localStorage.removeItem(AUTHORITY);
    }
}

function* logout(payload) {
    try {
        localStorage.removeItem(AUTHORITY);
        localStorage.removeItem(IS_AUTH);
        window.location.replace('/');
    } catch (error) {
    }
}
function* watchUserLogin() {
    yield takeEvery(AAD_LOGIN_CLICK, login);
    yield takeEvery(AAD_LOGOUT_CLICK, logout);

}

export default function* userSaga() {
    yield all([fork(watchUserLogin)]);
}
