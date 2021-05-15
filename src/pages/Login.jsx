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
import AuthTemplate from '../components/auth/AuthTemplate';
//import AuthForm from '../components/auth/AuthForm';
import LoginForm from '../containers/auth/LoginForm';

//원래는 return -> AuthTemplate 괄호 안에 <AuthForm type="login" />만 있었음=><LoginForm />
const Login = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default Login;


/*
* import React from 'react';
import AuthTemplate from "../components/auth/AuthTemplate";
//import AuthForm from "../components/auth/AuthForm";
import LoginForm from "../containers/auth/LoginForm";

//<AuthForm type = "login" />       / <LoginForm />
const LoginPage = () => {
    return(
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
};

export default LoginPage;
*
* */
