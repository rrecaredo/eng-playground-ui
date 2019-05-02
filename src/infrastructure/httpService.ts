import { Axios } from 'axios-observable';

export const get = (url: string, params?: any) => {
    return Axios.get(url, { params });
};

export const post = (url: string, params?: any) => {
    return Axios.post(url, { ...params });
}
