import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import React from 'react';
import RegisterForm from '../containers/auth/RegisterForm';

export function Login() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}

export function Register() {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
}
