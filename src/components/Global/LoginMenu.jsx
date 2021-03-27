import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import theme from '../../lib/styles/theme';
import loginIcon from '../../../public/img/login.svg';
import logoutIcon from '../../../public/img/logout.svg';

export const LoginMenu = ({ changeSidebar, changeLog, login }) => {
  return (
    <>
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
    </>
  );
};

LoginMenu.propTypes = {
  changeSidebar: PropTypes.func.isRequired,
  changeLog: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
};

const MenuItem = styled.li`
  order: 4;
  flex: 1;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${media.mobileL}px) {
    margin-bottom: 2rem;
    height: 70px;
    width: 100%;
    flex: none;
    order: 1;
  }
`;

const ImgLink = styled(NavLink)`
  width: 120px;
  height: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const LoginImg = styled.img.attrs({
  src: loginIcon,
  alt: 'login icon',
})`
  border-radius: 30px;
  box-shadow: 0px 2px 4px ${theme.Blue};
  @media (max-width: ${media.mobileL}px) {
    height: 38px;
  }
`;

const LogoutImg = styled.img.attrs({
  src: logoutIcon,
  alt: 'logout icon',
})`
  border-radius: 30px;
  box-shadow: 0px 2px 4px ${theme.DarkBlue};
  @media (max-width: ${media.mobileL}px) {
    height: 38px;
  }
`;
