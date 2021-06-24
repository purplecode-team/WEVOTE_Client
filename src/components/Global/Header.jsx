import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import media from '../../lib/styles/media';
import theme from '../../lib/styles/theme';
import { TextMenu } from './TextMenu';
import logoIcon from '../../../public/img/logo.png';
import menuBackground from '../../../public/img/menu_background.svg';
import { LoginMenu } from './LoginMenu';

const Header = () => {
  const [active, setActive] = useState(false);
  const [login, setLogin] = useState(false);

  const changeLog = () => setLogin(!login);
  const changeSidebar = () => setActive(!active);
  const hideSidebar = () => setActive(false);

  const loginText = '반갑습니다. OO님';
  const logoutText = '더 많은 이용을 위해 로그인/회원가입을 진행해주세요';

  return (
    <HeaderBar>
      <MenuBar>
        <ImgLink exact to="/" onClick={hideSidebar}>
          <LogoImg />
        </ImgLink>
        <MenuBox isActive={active}>
          <LoginMenu
            changeLog={changeLog}
            login={login}
            changeSidebar={changeSidebar}
          />
          <Subtext>{login ? loginText : logoutText}</Subtext>
          <TextMenuBlock changeSidebar={changeSidebar} />
        </MenuBox>
        <IconBox onClick={changeSidebar}>
          {active ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </IconBox>
      </MenuBar>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${theme.DarkBlue};
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
  flex-direction: row;
  color: #ffffff;
  font-weight: 500;
  text-align: center;
  @media (max-width: ${media.mobileL}px) {
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 60px;
    z-index: 99;
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
  height: 35px;
  margin: 0 10px;
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
    position: fixed;
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
