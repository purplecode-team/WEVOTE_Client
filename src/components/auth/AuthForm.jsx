import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginButton from '../common/btn_login.svg'
import RegisterButton from '../common/btn_register.svg'
import klogin from '../common/kakao_login.svg'
import glogin from '../common/google_login.svg'
//import Button from "../common/Button";

const AuthFormBlock = styled.div`
    h2{
        margin: 0;
        color: #FFFFFF;
        margin-bottom: 1rem;
    }
`;

const StyledInput = styled.input`
    width: 534px;
    height: 54px;
    border-bottom: 1px solid #5d3fe8;
    padding-bottom: 0.5rem;
    border-radius: 15px;
    &: focus{
    border-bottom: 1px solid #5d3fe8;
    }
    & + & {
    margin-top: 1rem;
    }
    `;


const header = styled.div`
.header{
position: absolute;
width: 62px;
height: 27px;
left: 929px;
top: 285px;

font-family: paybooc;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 27px;
text-align: center;

color: #252C44;
}
    `;

const Footer = styled.div`
    margin-top: 26px;
    text-align: right;
    a{
    text-decoration: underline;
    &:hover {
    color: #FFFFFB;
    }
    }
    .otherLogin{
    margin-top: 42px;
    display: flex;
    flex-direction: row;
    }
    `;


const textMap = {
  login: '로그인',
  register: '회원가입',
};


const AuthForm = ({type, form, onChange, onSubmit}) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <header className="header">
        {text}
      </header>

      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="univote@vote.com"
          onChange={onChange}
          value={form.username}
        />

        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="******"
          type="password"
          onChange={onChange}
          value={form.password}
        />

        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <div className="primaryLogin">
          {text === 'login' ? (
            <img src={LoginButton} alt="loginbutton"/>
          ) : (
            <img src={RegisterButton} alt="registerbutton"/>
          )}
          <div className="otherLogin">
            <img src={klogin} alt="klogin"/>
            <img src={glogin} alt="glogin"/>
          </div>
        </div>
      </form>

      <Footer>
        {text === 'login' ? (
          <Link to="/register">회원가입</Link>
        ):(
          <Link to="/login">로그인</Link>
        )}
      </Footer>

    </AuthFormBlock>
  );
};

export default AuthForm;

/*import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import LoginButton from '../common/btn_login.svg';
import klogin from '../common/kakao_login.svg';
import glogin from '../common/google_login.svg';

const AuthFormBlock = styled.div`
  h2 {
    margin: 0;
    color: ${palette.gray[2]};
    margin-bottom: 1rem;
  }
`;


const StyledInput = styled.input`
  width: 534px;
  height: 54px;
  border-bottom: 1px solid #5d3fe8;
  padding-bottom: 0.5rem;
  border-radius: 15px;
  &: focus {
    border-bottom: 1px solid #5d3fe8;
  }
  & + & {
    margin-top: 1rem;
  }
`;


const Footer = styled.div`
  margin-top: 26px;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
  .otherLogin {
    margin-top: 42px;
    display: flex;
    flex-direction: row;
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type}) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="univote@vote.com"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="******"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
      </form>

      <Footer>
        <div className="primaryLogin">
          <img src={LoginButton} />
          <div className="otherLogin">
            <img src={klogin} />
            <img src={glogin} />
          </div>
        </div>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;*/


/*
const StyledInput = styled.input`
position: absolute;
width: 534px;
height: 54px;
left: 693px;
top: 396px;

background: #FFFFFF;
border: 1px solid #5D3FE8;
box-sizing: border-box;
border-radius: 15px;
`;

const StyledInput = styled.input`
position: absolute;
width: 534px;
height: 54px;
left: 693px;
top: 396px;

background: #FFFFFF;
border: 1px solid #5d3fe8;
box-sizing: border-box;
border-radius: 15px;
    `;*/

/*
* const WhiteBox = styled.div`
.logo-area{
display: block;
padding-bottom: 2rem;
text-align: center;
font-weight: bold;
letter-spacing: 2px;
}
box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
padding: 2rem;
width: 534px;
background: white;
border-radius: 2px;
`;
* */
