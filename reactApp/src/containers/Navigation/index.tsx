import {useEffect, useState} from 'react';
import Navigation from '@components/navigation';
import { UserService } from '@services';
import {useDispatch, useSelector} from 'react-redux';
import { getProfileSelector } from '@redux/selectors/user';

import { fetchUserProfile } from '@redux/actions/user';

const NavigationContainer : React.FC<any> = () => {
    const dispatch = useDispatch();

    const user = useSelector(getProfileSelector);
    useEffect(() => {
        dispatch(fetchUserProfile())
    },[]);
    console.log(user)
    return (
        <Navigation user = {user}/>

    )

}

export default NavigationContainer;