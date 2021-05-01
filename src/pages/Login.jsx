/*
import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const Login = () => {
  return (
    <>
      <h1>Login page</h1>
    </>
  );
};

export default Login;*/

import React from 'react';
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const Login = () => {
    return(
        <AuthTemplate>
            <AuthForm type = "login" />
        </AuthTemplate>
    );
};

export default Login;