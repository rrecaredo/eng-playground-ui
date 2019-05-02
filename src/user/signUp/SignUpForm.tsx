import React from 'react';
import { Formik, Form, FormikActions } from 'formik';
import { TextField } from 'formik-material-ui';
import signupSchema from './schema';
import { register } from '../userService';
import IUser from '../userModel';
import Field from 'src/components/Field';
import Button from 'src/components/Button';
import ActionArea from 'src/components/ActionArea';

export default class SignUpForm extends React.Component {

    handleSubmit(values: IUser, { setSubmitting }: FormikActions<IUser>) {
        register(values).subscribe(console.log);
        setSubmitting(false);
    }

    render() {
        return (
            <Formik
                validationSchema={signupSchema}
                initialValues={{ username: '', displayName: '', password: '' }}
                onSubmit={(this.handleSubmit)}
                render={() => (
                    <Form>
                        <Field
                            name="username"
                            type="email"
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
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                color="primary">Singup</Button>
                        </ActionArea>
                    </Form>

                )}
            />
        )
    }
};