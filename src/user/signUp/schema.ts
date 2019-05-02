import * as Yup from 'yup';

export default new Yup.object().shape({
    username: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
    password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')  
    .required('Password is required!'),
    displayName: Yup.string()
    .required('Display name is required!')
});