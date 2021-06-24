import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MenuData } from './MenuData';
import media from '../../lib/styles/media';
import theme from '../../lib/styles/theme';

export const TextMenu = ({ changeSidebar }) => {
  return (
    <>
      {/* MenuDate.js의 데이터에 따라 자동 추가 */}
      {MenuData.map((item) => {
        if (item.type === 'space') {
          return <MenuSpace key={item.id} />;
        }
        return (
          <MenuItem key={item.id} onClick={changeSidebar}>
            <TextLink to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </TextLink>
          </MenuItem>
        );
      })}
    </>
  );
};

TextMenu.propTypes = {
  changeSidebar: PropTypes.func.isRequired,
};

const MenuItem = styled.li`
  flex: 1;
  width: 100px;
  @media (max-width: ${media.mobileL}px) {
    margin: 54px auto;
    height: 70px;
    width: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  border-radius: 30px;
  margin-top: 14px;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${theme.Blue};
  }
  svg {
    display: none;
  }
  span {
    font-size: 1.4rem;
  }
  @media (max-width: ${media.mobileL}px) {
    &.${activeClassName} {
      background-color: ${theme.Blue};
      color: white;
    }
    width: 80%;
    height: 60px;
    box-shadow: 0px 5px 4px ${theme.Shadow};
    background-color: ${theme.DarkBlue};
    margin: 0 auto;
    &:hover {
      background-color: ${theme.Blue};
      color: white;
    }
    svg {
      display: inline;
      width: 18px;
      margin-right: 5px;
    }
    span {
      font-size: 1.6rem;
    }
  }
`;

const MenuSpace = styled.div`
  @media (min-width: ${media.mobileL + 1}px) {
    flex: 7 7;
  }
`;
