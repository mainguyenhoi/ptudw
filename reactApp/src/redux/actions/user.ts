
import {createAction} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';
import {toastr} from 'react-redux-toastr';

import {UserConstant} from './constants';

const {AAD_LOGIN_PENDING, AAD_LOGIN_CLICK, AAD_LOGIN_FAILED, AAD_LOGIN_SUCCESS,
    AAD_LOGOUT_CLICK, AAD_LOGOUT_SUCCESS, FETCH_USER_PROFILE,  FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILED
} = UserConstant;

export const loginAction = createAction(AAD_LOGIN_CLICK, (payload) => {
    return {payload}
});

export const loginPending = createAction(AAD_LOGIN_PENDING);

export const loginSuccess = createAction(AAD_LOGIN_SUCCESS);

export const loginFailed = createAction(AAD_LOGIN_FAILED, (error) => {
    return {
        payload: {error}
    };
});

export const logOutAction = createAction(AAD_LOGOUT_CLICK);
export const logOutSuccess = createAction(AAD_LOGOUT_SUCCESS);

export const fetchUserProfile = createAction(FETCH_USER_PROFILE);

export const fetchUserProfileSuccess = createAction(FETCH_USER_PROFILE_SUCCESS, (payload) => {
    return {
        payload
    };
});
export const fetchUserProfileFailed = createAction(FETCH_USER_PROFILE_FAILED);

