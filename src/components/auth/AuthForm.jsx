import styled, { css } from 'styled-components';
import { verifyEmail, verifyName, verifyPassword } from '../../utils/getRegExp';

import Button from '../Common/Button';
import client from '../../lib/api/client';
import glogin from '../../../public/img/login/googleLogin.png';
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import klogin from '../../../public/img/login/kakaoLogin.png';
import { Link } from 'react-router-dom';
import media from '../../lib/styles/media';
import React from 'react';
import theme from '../../lib/styles/theme';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  const isRegister = type === 'register';

  const responseSuccess = res => {
    // token id 포함한 post request로 사용자 정보 가져오기
    if (res.id_token) {
      client
        .post(`/outh/v1/login`, { tokenId: res.id_token })
        .then(response => console.log(response.data))
        .catch(e => console.error(e));
    }
  };

  const correctName = () => verifyName(form.name)
  const correctEmail = () => verifyEmail(form.userId)
  const correctPassword = () => verifyPassword(form.password)
  const correctPasswordConfirm = () => (
    form.password === form.passwordConfirm && form.password !== ''
  )
  
  const preventSubmit = () => {
    if (isRegister) {
      if (
        correctEmail() &&
        correctPassword() &&
        correctPasswordConfirm() &&
        correctName()
      ) return false;
      return true
    }
    if (correctEmail() && correctPassword()) return false;
    return true
  }

  return (
    <AuthFormBlock>
      <Title className="header">{text}</Title>
      {isRegister && (
        <Subtitle>
          {'게시판을 이용하기 위해 먼저 회원가입을 진행해주세요'}
        </Subtitle>
      )}
      <Form onSubmit={onSubmit}>
        {isRegister && (
          <>
            <StyledLabel>{'이름'}</StyledLabel>
            <StyledInput
              error={!correctName()}
              autoComplete="name"
              name="name"
              placeholder="2~20자리 한글 또는 영문"
              onChange={onChange}
              value={form.name}
            />
          </>
        )}
        <StyledLabel>{'이메일'}</StyledLabel>
        <StyledInput
          error={!correctEmail()}
          autoComplete="userId"
          name="userId"
          placeholder="ex) univote@vote.com"
          onChange={onChange}
          value={form.userId}
        />
        <StyledLabel>{'비밀번호'}</StyledLabel>
        <StyledInput 
          error={!correctPassword()}
          autoComplete="password"
          name="password"
          placeholder="영문,숫자,특수문자를 포함한 6~12자리"
          type="password"
          onChange={onChange}
          value={form.password}
        />

        {isRegister && (
          <>
            <StyledLabel>{'비밀번호 확인'}</StyledLabel>
            <StyledInput
              error={!correctPasswordConfirm()}
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          </>
        )}

        <ButtonBlock>
          <Button type='submit' disabled={preventSubmit()}>{text}</Button>
        </ButtonBlock>
        {!isRegister && (
          <APILoginBlock>
            <KakaoLogin
              token="5bea7f615e03c869086e836714986db6"
              onSuccess={console.log}
              onFail={console.error}
              onLogout={console.info}
              style={{
                border: 'none',
                backgroundColor: 'inherit',
                cursor: 'pointer',
              }}
            >
              <KakaoImg src={klogin} alt="klogin" />
            </KakaoLogin>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              render={(renderProps) => (
                <GoogleImg
                  src={glogin}
                  alt="glogin"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                />
              )}
              buttonText="Login"
              onSuccess={responseSuccess}
              onFailure={responseSuccess}
              cookiePolicy="single_host_origin"
            />
          </APILoginBlock>
          )
        }
      </Form>

      <Footer>
        {isRegister ? (
          <Link to="/login">{'로그인'}</Link>
        ) : (
          <Link to="/register">{'회원가입'}</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;

const APILoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 0;
`;

const KakaoImg = styled.img`
  &:hover {
    cursor: pointer;
  }
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: ${media.mobileL}px) {
    width: 90%;
  }
`;

const GoogleImg = styled.img`
  width: 300px;
  margin: 20px auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${media.mobileL}px) {
    width: 90%;
  }
`;

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
`;

const Form = styled.form`
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledLabel = styled.label`
  font-size: 1.3rem;
  color: #252c44;
  margin: 15px 5px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 97%;
  height: 54px;
  padding-left: 10px;
  border: 1px solid ${theme.Blue};
  border-radius: 15px;
  &:focus {
    border: 1px solid #1d1444;
    outline: none;
  }
  & + & {
    margin-top: 1rem;
  }
  ${(props) =>
    props.error &&
    css`
      border: 1px solid #c00404;
    `
  }
  @media (max-width: ${media.mobileL}px) {
    width: 94%;
    height: 40px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: #252c44;
  margin: 20px auto;
  @media (max-width: ${media.mobileL}px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #252c44;
  text-align: center;
  margin: 10px auto;
  @media (max-width: ${media.mobileL}px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 15px 20px 0px;
`;

// const Button = styled.button`
//   width: 100px;
//   height: 44px;
//   background-color: ${theme.Blue};
//   color: white;
//   border-style: none;
//   border-radius: 10px;
//   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
//   &:hover {
//     cursor: pointer;
//     background-color: ${theme.DarkBlue};
//   }
//   @media (max-width: ${media.mobileL}px) {
//     font-size: 1.2rem;
//     width: 80px;
//     height: 40px;
//   }
// `;

const Footer = styled.div`
  margin: 40px auto;
  a {
    text-decoration: underline;
    font-size: 1.4rem;
    font-weight: bold;
    &:hover {
      color: ${theme.Blue};
    }
  }
`;
