import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from './AuthForm';
import authSlice from '@store/modules/authSlice';
import { login } from '@api/auth';
import storeTypes from 'storeTypes';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import userSlice from '@store/modules/userSlice';

const LoginForm = () => {
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }: storeTypes.sliceState) => ({
    form: auth.login,
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      authSlice.actions.changeField({
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
      dispatch(
        userSlice.actions.tempSetUser({ user: { nickName, status, userId } })
      );
      if (status === 'admin') history.push('/admin');
      else history.push('/');
    } catch {
      alert.error('로그인 실패');
    }
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(authSlice.actions.initializeForm('login'));
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
