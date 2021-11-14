import $ from 'jquery';
import PropTypes from 'prop-types';
import React, {Component, CSSProperties} from 'react';
import {get, isEmpty} from 'lodash';
import {Link, Redirect} from 'react-router-dom';
import {toastr} from 'react-redux-toastr';

import {correctHeight, detectBody} from '@helpers/theme';
import * as auth from '../../helpers/auth';
import Loading from '@components/loading';
import backgroundImage from '@assets/images/cloud-background.jpg';
import {connect, useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {UserAction} from '@redux/actions';
import LoginForm from '@components/LoginForm';
import {useEffect,useMemo} from 'react';

import {  useSelector } from 'react-redux'

// later

const customStyle: {
    background: CSSProperties
} = {
    background: {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute'
    }
};

interface IProps {
    loginAction: () => void
}

const  Login : React.FC<IProps> = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        $(window).bind('load resize', () => {
            correctHeight();
            detectBody();
        });
    },[])

    const user = useSelector((state:any) => state.user);

    const redirect = useMemo(()=>{
        const {isAuth} = user;
        if (isAuth) {
           return <Redirect to='/' />;
        }
        return null;
    },[user])

    const login = (data) =>{
        console.log(data);
        dispatch(UserAction.loginAction(data));
    }
    
        return (
            <div className="gray-bg" style={{ height: '100vh' }}>
                {redirect}
                <div className="middle-box text-center loginscreen animated fadeInDown" style={{ paddingBottom: '40px' }}>
                    <Link className="nav-link" to="">
                        {/* <img alt="" className="img-circle logo" src={logo}/> */}
                    </Link>
                    <h3>Get Hired!</h3>
                    <p>Login in. To see it in action.</p>

                    <LoginForm onSubmit ={login} />
                    <br />
                    <div>Example account: user1 - 123456
                    </div>

                </div>

            </div>
        );


}



export default Login;
