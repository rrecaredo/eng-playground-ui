import { Axios } from 'axios-observable';
import { map } from 'rxjs/operators';
import urlJoin from 'url-join';
import { AxiosObservable } from 'axios-observable/dist/axios-observable.interface';
import { AxiosResponse } from 'axios';
import { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
import { currentUserSubject } from './authService';

const apiUrl = 'https://s04ouai2zb.execute-api.us-east-1.amazonaws.com/prod/';
const getFullUrl = (url: string) => `${urlJoin(apiUrl, url)}`;

const requestConfig: AxiosRequestConfig = {
    validateStatus: () => true,
    headers: { 'Content-Type': 'application/json' }
};

export interface HttpResponse<T>  {
    response: AxiosResponse<T>,
    successful: boolean
  };

type HttpResponseObservable<T> = Observable<HttpResponse<T>>;

export const authHeader = () => {
    const currentUser = currentUserSubject;
    return (currentUser && currentUser.value) ?
        { Authorization: `Bearer ${currentUser.value.token}` } : {};
}

const createHttpSubscription = <T>(observable: AxiosObservable<T>): HttpResponseObservable<T> => {
    return observable.pipe(
        map(e => {
            // TODO: Implement Http Error Handling Interceptors here
            return {
                successful: e.status >= 200 && e.status <= 204,
                response:  { ...e } };
        }));
}

export const get = <T = any>(url: string, params?: any): HttpResponseObservable<T> => {
    return createHttpSubscription(Axios.get(getFullUrl(url), { params }));
}

export const post = <T = any>(url: string, params?: any): HttpResponseObservable<T> => {
    return createHttpSubscription(
        Axios.post(getFullUrl(url), { ...params }, requestConfig));
};
