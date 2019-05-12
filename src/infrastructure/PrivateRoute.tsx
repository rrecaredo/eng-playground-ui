import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './authService';


export const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={props => {
        const currentUser = isAuthenticated();
        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        return <Component {...props} />
    }} />
)