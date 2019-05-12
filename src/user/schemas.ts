import * as Yup from 'yup';

const basicSchema = {
    username: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
    password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')  
    .required('Password is required!'),
};

export const loginSchema = new Yup.object().shape({
    ...basicSchema
});

export const signupSchema = new Yup.object().shape({
    ...basicSchema,
    displayName: Yup.string()
    .required('Display name is required!')
});