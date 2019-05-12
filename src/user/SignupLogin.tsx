import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { FormikActions } from 'formik';
import React, { useState } from 'react';
import Container from 'src/components/Container';
import { login, currentUserSubject, isAuthenticated } from 'src/infrastructure/authService';

import LoginForm from './login/LoginForm';
import SignUpForm from './signUp/SignUpForm';
import { FormWrapper, Slide, Slider } from './styledComponents';
import IUser from './userModel';
import { register } from './userService';
import { history } from 'src/infrastructure/history';

enum FormTabs {
    login = 0,
    signup = 1
}

export default () => {
    const [selectedTab, setSelectedTab] = useState(FormTabs.login);

    const getSliderClassName = () =>
        FormTabs.signup === selectedTab ? '-signup' : '';

    const getSlideClassName = (currentTab: number) =>
        selectedTab === currentTab ? '-active' : '';

    const handleSubmitSignup = (values: IUser, { setSubmitting }: FormikActions<IUser>) => {
        register(values).subscribe(console.log);
        setSubmitting(false);
    };

    const handleSubmitLogin = async (values: IUser, { setSubmitting }: FormikActions<IUser>) => {
        await login(values);
        setSubmitting(false);
    };

    currentUserSubject.subscribe(() => {
        if (isAuthenticated())
            history.push('/flashcards');
    });

    return (

        <FormWrapper>
            <Container square={true} elevation={1}>
                <Tabs value={selectedTab} variant="fullWidth" onChange={(e, v) => setSelectedTab(v)}>
                    <Tab label="Login" />
                    <Tab label="Signup" />
                </Tabs>
                <Slider className={getSliderClassName()}>
                    <Slide className={getSlideClassName(FormTabs.login)}>
                        <LoginForm onSubmit={(v: IUser, fa: FormikActions<IUser>) => handleSubmitLogin(v, fa)} />
                    </Slide>
                    <Slide className={getSlideClassName(FormTabs.signup)}>
                        <SignUpForm onSubmit={(v: IUser, fa: FormikActions<IUser>) => handleSubmitSignup(v, fa)} />
                    </Slide>
                </Slider>
            </Container>
        </FormWrapper>
    );
}