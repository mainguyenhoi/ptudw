import { API } from "@configs";
import { AUTHORITY } from "@src/constants/localStorage";
const token = 'Bearer '+ localStorage.getItem(AUTHORITY);
export const workForm = async (payload) =>{
    API.defaults.headers.common['Authorization']= token;
    return await API({
        url: '/POST_WORKING_FORM',
        method: 'POST',
        data: payload
    })
}
