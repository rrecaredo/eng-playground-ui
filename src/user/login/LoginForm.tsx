import React from 'react';
import Button from 'src/components/Button';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import ActionArea from 'src/components/ActionArea';

export default class LoginForm extends React.Component {
    render() {
        return (
            <Formik
                render={() => (
                    <Form>
                        <Field
                            name="email"
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
                        <ActionArea>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                color="primary">Login</Button>
                        </ActionArea>
                    </Form>)
                }
                initialValues={{ email: '' }} onSubmit={() => { }} />
        );
    }
}
