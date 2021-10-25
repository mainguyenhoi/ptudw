import axios from 'axios';
import {API_ENDPOINT} from '@environments';
import  interceptor from  './interceptor';


 const API  = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

interceptor(API);

export {API}
