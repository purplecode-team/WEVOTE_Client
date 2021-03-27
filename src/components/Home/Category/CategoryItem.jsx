import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';

const CategoryItem = ({ title, onClick, isActive, isTopActive, isTop }) => {
  return (
    <Item
      onClick={onClick}
      isActive={isActive ? 1 : 0}
      isTopActive={isTopActive ? 1 : 0}
      isTop={isTop}
    >
      <p>{title}</p>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: Transparent;
  -webkit-appearance: none;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  p {
    font-size: 1.6rem;
    line-height: 22px;
    text-align: center;
    color: black;
  }
  &:hover {
    background-color: white;
    p {
      color: ${theme.Blue};
    }
  }
  @media (max-width: ${media.mobileL}px) {
    p {
      font-size: 1.2rem;
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: white;
      font-family: 'paybooc-medium', 'sans-serif';
      p {
        color: ${theme.Blue};
      }
    `};
  ${(props) =>
    props.isTopActive &&
    css`
      border-bottom: 6px solid ${theme.Blue};
    `};
  ${(props) =>
    props.isTop &&
    css`
      width: 33.3%;
      padding: 0;
      p {
        font-family: 'paybooc-medium', 'sans-serif';
      }
      @media (max-width: ${media.mobileL}px) {
        font-size: 1.4rem;
      }
    `};
`;

export default CategoryItem;
