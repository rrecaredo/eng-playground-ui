import React, { useState } from 'react';
import Container from 'src/components/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import SignUpForm from './signUp/SignUpForm';
import LoginForm from './login/LoginForm';

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <FormWrapper>
            <Container square={true} elevation={1}>
                <Tabs value={selectedTab} fullWidth onChange={(e, v) => setSelectedTab(v)}>
                    <Tab label="Signup" />
                    <Tab label="Login" />
                </Tabs>
                { selectedTab === 0 && <SignUpForm/> }
                { selectedTab === 1 && <LoginForm/> }
            </Container>
        </FormWrapper>);
}