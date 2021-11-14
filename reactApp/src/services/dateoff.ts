import { API } from "@configs";
import { AUTHORITY } from "@src/constants/localStorage";
const token = 'Bearer '+ localStorage.getItem(AUTHORITY);
export const dateOff = async (payload) =>{
    API.defaults.headers.common['Authorization']= token;
    return await API({
        url: '/dateoff',
        method: 'POST',
        data: payload
    })
}
export const fetchDateOffList = async() =>{
    API.defaults.headers.common['Authorization']= token;
    return await API({
        url:'/FETCH_DATE_OFF_LIST',
        method: 'GET'
    })
}