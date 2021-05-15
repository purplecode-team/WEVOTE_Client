/*
import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="register" />
        </AuthTemplate>
    );
};

export default RegisterPage;
 */

import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from "../containers/auth/RegisterForm";
//import AuthForm from '../components/auth/AuthForm';

//<AuthForm type="register" />
const Register = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};
export default Register;
