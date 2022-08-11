import AuthTemplate from '@components/auth/AuthTemplate';
import LoginForm from '@components/auth/LoginForm';
import React from 'react';
import RegisterForm from '@components/auth/RegisterForm';

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
