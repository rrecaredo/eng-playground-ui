import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { signupSchema } from '../schemas';
import Field from 'src/components/Field';
import ActionArea from 'src/components/ActionArea';
import ISignupLoginFormProps from '../signupLoginProps';
import { SignupButton } from '../styledComponents';
import LoadingIndicator from 'src/components/LoadingIndicator';

export default ({ onSubmit }: ISignupLoginFormProps) => {
    return (
        <Formik
            validationSchema={signupSchema}
            initialValues={{ username: '', displayName: '', password: '' }}
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
                        <Field
                            name="displayName"
                            type="text"
                            label="Display Name"
                            fullWidth
                            component={TextField}
                        />
                        <ActionArea>
                            <SignupButton
                                type="submit"
                                variant="contained"
                                color="primary">Singup</SignupButton>
                        </ActionArea>
                    </Form>
                </LoadingIndicator>
            )}
        />
    )
};
