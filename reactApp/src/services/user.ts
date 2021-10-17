import {API} from '@configs'

export const login = async (payload) => {
    return await API({
        url: '/auth/login',
        method: 'POST',
        data: payload
        
    })
}
