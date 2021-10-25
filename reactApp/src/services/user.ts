import {API} from '@configs'
import { get } from 'lodash';

export const login = async (payload) => {
    return await API({
        url: '/auth/login',
        method: 'POST',
        data: payload
        
    })
}

export const getProfile = async () => {
  return get(await API({
        url: '/users/me',
        method: 'GET',
    }), 'data')
}