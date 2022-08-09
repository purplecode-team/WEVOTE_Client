import { changeField, initializeForm } from '@modules/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from './AuthForm';
import { login } from '@api/auth';
import { rootState } from '@modules/root';
import { tempSetUser } from '@modules/user';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }: rootState) => ({
    form: auth.login,
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form) return;
    try {
      const { nickName, status, userId } = await login({
        userId: form.userId,
        password: form.password,
      });
      dispatch(tempSetUser({ nickName, status, userId }));
      if (status === 'admin') history.push('/admin');
      else history.push('/');
    } catch {
      alert.error('로그인 실패');
    }
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
    return () => dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
