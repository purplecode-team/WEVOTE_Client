import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { MenuData } from './MenuData';
import media from '../lib/styles/media';
import theme from '../lib/styles/theme';
import logoIcon from '../../public/img/logo.png';
import loginIcon from '../../public/img/login.svg';
import logoutIcon from '../../public/img/logout.svg';

const Header = () => {
  const [active, setActive] = useState(false);
  const [login, setLogin] = useState(false);

  const changeSidebar = () => setActive(!active);
  const hideSidebar = () => setActive(false);
  const changeLog = () => setLogin(!login);

  return (
    <HeaderBar>
      <MenuBar>
        <ImgLink exact to="/" onClick={hideSidebar}>
          <LogoImg />
        </ImgLink>
        {/* MenuData.js의 item.type 설정에 따라 다르게 return함 */}
        <MenuBox isActive={active}>
          {MenuData.map((item) => {
            if (item.type === 'space') {
              return <MenuSpace key={item.id} />;
            }
            return (
              <MenuItem key={item.id} onClick={changeSidebar}>
                <TextLink to={item.path}>
                  <p>{item.title}</p>
                </TextLink>
              </MenuItem>
            );
          })}
          <MenuItem
            onClick={() => {
              changeSidebar();
              changeLog();
            }}
          >
            <ImgLink exact to="/login">
              {login ? <LoginImg /> : <LogoutImg />}
            </ImgLink>
          </MenuItem>
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
    right: ${(props) => (props.isActive ? '0%' : '-200px')};
    flex-direction: column;
    position: fixed;
    top: 0;
    width: 200px;
    height: 100vh;
    padding-top: 60px;
    background-color: ${theme.DarkBlue};
    transition: all 500ms;
  }
`;

const MenuItem = styled.li`
  flex: 1 1;
  width: 100px;
  @media (max-width: ${media.mobileL}px) {
    margin: 0 auto;
    height: 50px;
    flex: none;
  }
`;

const activeClassName = 'active';

const TextLink = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    background-color: white;
    color: ${theme.Blue};
  }
  display: inline-block;
  width: 100px;
  height: 32px;
  border-radius: 15px;
  margin-top: 14px;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${theme.Blue};
  }
  p {
    padding-top: 9px;
    font-size: 1.4rem;
  }
`;

const MenuSpace = styled.div`
  @media (min-width: ${media.mobileL + 1}px) {
    flex: 8 8;
  }
`;

const ImgLink = styled(NavLink)`
  width: 120px;
  height: 35px;
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

const LoginImg = styled.img.attrs({
  src: loginIcon,
  alt: 'login icon',
})`
  width: 80px;
  height: 32px;
  margin-top: 13px;
`;

const LogoutImg = styled.img.attrs({
  src: logoutIcon,
  alt: 'logout icon',
})`
  width: 80px;
  height: 32px;
  margin-top: 13px;
`;

const IconBox = styled.div`
  position: fixed;
  right: 10px;
  top: 15px;
  @media (min-width: ${media.mobileL + 1}px) {
    display: none;
  }
  @media (max-width: ${media.mobileL}px) {
    display: inline-block;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Header;
