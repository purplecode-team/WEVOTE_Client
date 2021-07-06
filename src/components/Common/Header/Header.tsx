import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as React from 'react';

import styled, { css } from 'styled-components';

import { LoginMenu } from './LoginMenu';
import logoIcon from '../../../../public/img/logo.svg';
import media from '../../../lib/styles/media';
import menuBackground from '../../../../public/img/menuBackground.svg';
import { NavLink } from 'react-router-dom';
import { TextMenu } from './TextMenu';
import theme from '../../../lib/styles/theme';
import { useState } from 'react';

type HeaderProps = {
  isActive: boolean;
};

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [login, setLogin] = useState(false);

  const changeLog = () => setLogin(!login);
  const changeSidebar = () => setActive(!isActive);
  const hideSidebar = () => setActive(false);

  const loginText = '반갑습니다. OO님';
  const logoutText = '더 많은 이용을 위해 로그인/회원가입을 진행해주세요';

  return (
    <HeaderBar isActive={isActive}>
      <MenuBar>
        <ImgLink exact to="/" onClick={hideSidebar}>
          <LogoImg />
        </ImgLink>
        <MenuBox isActive={isActive}>
          <LoginMenu
            changeLog={changeLog}
            login={login}
            changeSidebar={changeSidebar}
          />
          <Subtext>{login ? loginText : logoutText}</Subtext>
          <TextMenuBlock changeSidebar={changeSidebar} />
        </MenuBox>
        <IconBox onClick={changeSidebar}>
          {isActive ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </IconBox>
      </MenuBar>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  width: 100vw;
  height: 60px;
  background-color: ${theme.DarkBlue};
  z-index: 10;
  position: absolute;
  top: 0;
  overflow-x: hidden;
  ${(props: HeaderProps) =>
    props.isActive &&
    css`
      position: fixed;
    `};
`;

const MenuBar = styled.nav`
  font-size: 3rem;
  color: white;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: ${media.mobileL + 1}px) {
    max-width: ${media.laptop}px;
    padding: 0 10px;
  }
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
`;

const MenuBox = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #ffffff;
  font-weight: 500;
  text-align: center;
  @media (max-width: ${media.mobileL}px) {
    display: ${(props: HeaderProps) => (props.isActive ? 'block' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 60px;
    z-index: 10;
    width: 100%;
    height: 100%;
    padding-top: calc(100% - 300px);
    background-color: white;
    background-image: url(${menuBackground});
    background-size: cover;
  }
`;

const Subtext = styled.p`
  display: none;
  @media (max-width: ${media.mobileL}px) {
    display: block;
    order: 2;
    margin-bottom: 10rem;
    font-size: 1.3rem;
    color: ${theme.DarkBlue};
  }
`;

const TextMenuBlock = styled(TextMenu)`
  order: 1;
  @media (max-width: ${media.mobileL}px) {
    order: 3;
  }
`;

const ImgLink = styled(NavLink)`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const LogoImg = styled.img.attrs({
  src: logoIcon,
  alt: 'main logo',
})`
  width: 120px;
  @media (max-width: ${media.mobileL}px) {
    margin: 0 10px;
  }
`;

const IconBox = styled.button`
  @media (min-width: ${media.mobileL + 1}px) {
    display: none;
  }
  @media (max-width: ${media.mobileL}px) {
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 16px;
    color: white;
    background-color: Transparent;
    -webkit-appearance: none;
    box-sizing: border-box;
    border: none;
    outline: none;
    cursor: pointer;
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export default Header;
