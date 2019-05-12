import React from 'react';
import Field from 'src/components/Field';
import { loginSchema } from '../schemas';
import { Formik, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import ActionArea from 'src/components/ActionArea';
import ISignupLoginFormProps from '../signupLoginProps';
import { LoginButton } from '../styledComponents';
import LoadingIndicator from 'src/components/LoadingIndicator';

export default ({ onSubmit }: ISignupLoginFormProps) => {
    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={{ username: '', password: '' }}
            onSubmit={(v, fa) => onSubmit(v, fa)}
            render={({ isSubmitting }) => (
                <LoadingIndicator loading={isSubmitting}>
                    <Form>
                        <Field
                            name="username"
                            type="username"
                            label="Email"
                            fullWidth
                            required
                            component={TextField}
                        />
                        <Field
                            name="password"
                            type="password"
                            label="Password"
                            fullWidth
                            component={TextField}
                        />
                        <ActionArea>
                            <LoginButton
                                type="submit"
                                variant="contained"
                                color="primary">Login</LoginButton>
                        </ActionArea>
                    </Form>
                </LoadingIndicator>
            )}
        />
    );
}
