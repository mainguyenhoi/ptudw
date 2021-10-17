import {API} from '@configs';

export const getAll = async () => {
   const data = await API({
        url: '/unit',
        method: 'get',
    })

    return data.data;
}
export const getUserByUnitId = async (id) => {
    const data =  await API({
        url: `/unit/${id}/user`,
        method: 'get',
    });
    
    return data.data;
}
