import {ActionReducerMapBuilder, createReducer} from '@reduxjs/toolkit';
import {UserAction} from '../actions';
import {UserConstant} from '../actions/constants';

const {
    AAD_LOGIN_PENDING, AAD_LOGIN_CLICK, AAD_LOGIN_FAILED, AAD_LOGIN_SUCCESS, AAD_LOGOUT_CLICK
} = UserConstant;
const initialState = {
    loading: false,
    error: null,
    isAuth: false,
    userProfile: {}
};

const {loginAction, loginSuccess, loginPending, loginFailed, logOutAction ,fetchUserProfile, fetchUserProfileSuccess} = UserAction;

const UserReducer = createReducer(initialState, (builder) => {
    builder.addCase(loginAction, (state, action) => {
        return {
            loading: true,
            error: null,
            isAuth: false,
            userProfile: {}
        };
    })
        .addCase(loginSuccess, (state) => {
            state.isAuth = true;
            state.loading = false;
        })
        .addCase(loginPending, () => {
            return {
                ...initialState
            };
        })
        .addCase(loginFailed, (payload) => {
            return {
                ...initialState,
                isAuth: false,
                error: payload.error
            }
        }).addCase(logOutAction, () => {
            return initialState
        }).addCase(fetchUserProfileSuccess, (state, data) => {
            const { payload } =data;
            state.userProfile = payload;
        })
});

export default UserReducer;