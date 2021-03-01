import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../lib/styles/media';
import loginIcon from '../../public/img/login.svg';
import logoIcon from '../../public/img/logo.png';

const Header = () => {
  const MenuList = ['Main', '선거정보', '공약게시판', '관리자페이지', 'Login'];
  const MenuRoute = ['/', '/info', '/board', '/admin', '/login'];
  return (
    <HeaderVar>
      <Menu>
        <ImgLink exact to={MenuRoute[0]}>
          <MenuItem>
            <LogoImg />
          </MenuItem>
        </ImgLink>
        <TextLink exact to={MenuRoute[1]}>
          <MenuItem>
            <p>{MenuList[1]}</p>
          </MenuItem>
        </TextLink>
        <TextLink exact to={MenuRoute[2]}>
          <MenuItem>
            <p>{MenuList[2]}</p>
          </MenuItem>
        </TextLink>
        <MenuSpace />
        <TextLink exact to={MenuRoute[3]}>
          <MenuItem>
            <p>{MenuList[3]}</p>
          </MenuItem>
        </TextLink>
        <ImgLink exact to={MenuRoute[4]}>
          <MenuItem>
            <LoginImg />
          </MenuItem>
        </ImgLink>
      </Menu>
    </HeaderVar>
  );
};

const HeaderVar = styled.header`
  @media (max-width: ${media.laptop - 1}px) {
    width: ${media.laptop}px;
  }
  height: 60px;
  background-color: #252c44;
`;

const Menu = styled.div`
  width: ${media.laptop}px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-basis: 100px;
  color: #ffffff;
  font-weight: 500;
  text-align: center;
`;

const activeClassName = 'active';

const ImgLink = styled(NavLink)`
  flex: 1 1;
  &:hover {
    cursor: pointer;
  }
`;

const TextLink = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    div {
      background-color: white;
    }
    color: #5d3fe8;
  }
  flex: 1 1;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #5d3fe8;
  }
`;

const MenuItem = styled.div`
  display: inline-block;
  width: 100px;
  height: 32px;
  border-radius: 15px;
  margin-top: 1.4rem;
  p {
    padding-top: 0.8rem;
    font-size: 1.4rem;
  }
`;

const MenuSpace = styled.div`
  flex: 5 5;
`;

const LogoImg = styled.img.attrs({
  src: logoIcon,
  alt: 'main logo',
})`
  width: 100%;
`;

const LoginImg = styled.img.attrs({
  src: loginIcon,
  alt: 'login icon',
})`
  width: 100%;
  margin-top: -0.5rem;
`;

export default Header;
