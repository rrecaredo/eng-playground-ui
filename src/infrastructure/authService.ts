import decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import IUser from 'src/user/userModel';

import { IAuthInformation } from './auth-information.model';
import { post } from './httpService';
import { errorBus } from './errorBus';
import EventType from './eventType';

interface ITokenInfo {
    displayName: string;
    token: string;
    userId: string;
};

const initialCurrentUser = localStorage.getItem('currentUser');

const currentUserSubject
    = new BehaviorSubject<ITokenInfo | null>(
        initialCurrentUser ? JSON.parse(initialCurrentUser) : null);

const login = (user: IUser): Promise<void> => {
    return new Promise((resolve) => {
        post<IAuthInformation>('users/login', user).subscribe((event) => {
            if (event.successful) {
                const { displayName, token, userId } = event.response.data;
                localStorage.setItem('currentUser',
                    JSON.stringify({ displayName, token, userId }));
                currentUserSubject.next({ displayName, token, userId });
            } else {
                errorBus.next({
                    type: EventType.HttpAuthentication,
                    payload: 'Username or login does not match'
                })
            }
            resolve();
        });
    });
};

const logout = () => {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
};

const isAuthenticated = () => {
    const currentUser = currentUserSubject.value;
    if (!currentUser) return false;
    return !isTokenExpired(currentUser.token);
};

const isTokenExpired = (token: string) => {
    try {
        const decoded: any = decode(token);
        return decoded.exp < Date.now() / 1000;
    }
    catch (err) {
        return false;
    }
}

export {
    login,
    logout,
    isAuthenticated,
    currentUserSubject
};