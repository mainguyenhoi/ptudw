import {LocalStorageConstant} from '@constants';
import {logOutAction} from '../redux/actions/user';

const {IS_AUTH, AUTHORITY} = LocalStorageConstant;

export function isAuth() {
    return localStorage.getItem(IS_AUTH);
}

export function getAuth() {
    return JSON.parse(localStorage.getItem(AUTHORITY) || '{}');
}

export async function logout() {
    localStorage.removeItem(AUTHORITY);
    localStorage.removeItem(IS_AUTH);

}

