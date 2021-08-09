import { changeField, initializeForm } from '../../modules/auth';
import { login, register } from '../../lib/api/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from '../../components/auth/AuthForm';
import { tempSetUser } from '../../modules/user';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = async e => {
    e.preventDefault();
    const result = {
      nickName: form.nickName,
      userId: form.userId,
      password: form.password,
    };
    try {
      const response = await register(result);
      const { nickName, status, userId } = await login({
        userId: response.userId,
        password: form.password,
      });
      dispatch(tempSetUser({ user: { nickName, status, userId } }));
      history.push('/');
    } catch {
      alert.error('회원가입 실패');
    }
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
