import {API} from '@configs';

export const getAll = async () => {
    const data = await API({
        url: '/language',
        method: 'get',
    })
    return data.data;

}
export const getUserByLanguageId = async (id) => {
    const data =   await API({
        url: `/language/${id}/user`,
        method: 'get',
    });
    return data.data
}
