import * as React from 'react';

import PropTypes from 'prop-types';
import loginIcon from '../../../../public/img/login.svg';
import { logout } from '../../../lib/api/auth';
import { logoutAction } from '../../../modules/user';
import logoutIcon from '../../../../public/img/logout.svg';
import media from '../../../lib/styles/media';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

type LoginMenuProps = {
  changeActiveMenu: () => void;
  isLogin: boolean;
};

export const LoginMenu = ({
  changeActiveMenu,
  isLogin = false,
}: LoginMenuProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    dispatch(logoutAction());
    history.push('/');
  };

  const routeLoginForm = () => {
    history.push('/login');
  };

  return (
    <>
      <MenuItem onClick={changeActiveMenu}>
        {isLogin ? (
          <LoginImg onClick={handleLogout} />
        ) : (
          <LogoutImg onClick={routeLoginForm} />
        )}
      </MenuItem>
    </>
  );
};

LoginMenu.propTypes = {
  changeActiveMenu: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

const MenuItem = styled.li`
  order: 4;
  flex: 1;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${media.mobileL}px) {
    margin-bottom: 2rem;
    height: 70px;
    width: 100%;
    flex: none;
    order: 1;
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
