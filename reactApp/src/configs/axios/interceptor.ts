import {logout} from '@helpers/auth';
import history from '@src/history';

export default  (axios:any) => {
    axios.interceptors.request.use( function(config) {
        const authority = localStorage.getItem('doan:authority');
        const newConfig = config;
        // if (!authority || Date.now() >= JSON.parse(authority).expires_in) {
        //     try {
        //     } catch (error) {
        //         return Promise.reject(error);
        //     }
        // }
    
        if (authority ) {
            const data = JSON.parse(authority);
            const { accessToken} = data;
          newConfig.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
             
        }
        return newConfig;
    });
    
    axios.interceptors.response.use((response) => response, async (error) => {
    
        if (error.response) {
            const {status} = error.response;
            const {data} = error.response.data;
    
            if (status === 401 || data.isExpired) {
                logout();
                history.push("/login");
            }
        }
    });
}
