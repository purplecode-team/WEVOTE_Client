import * as React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';

type CategoryItemProps = {
  title: string;
  onClick: any;
  isActive: boolean;
  isTopActive?: boolean;
  isTop?: boolean;
};

type styleProps = {
  isActive: boolean;
  isTopActive?: boolean;
  isTop?: boolean;
};

const CategoryItem = ({
  title,
  onClick,
  isActive,
  isTopActive,
  isTop,
}: CategoryItemProps) => {
  return (
    <Item
      isActive={isActive}
      isTopActive={isTopActive}
      isTop={isTop}
      onClick={onClick}
    >
      <p>{title}</p>
    </Item>
  );
};

CategoryItem.defaultProps = {
  isTopActive: false,
  isTop: false,
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
    font-family: 'paybooc-medium', 'sans-serif';
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

  ${(props: styleProps) =>
    props.isActive &&
    css`
      background-color: white;
      p {
        color: ${theme.Blue};
      }
    `};

  ${(props: styleProps) =>
    props.isTopActive &&
    css`
      border-bottom: 6px solid ${theme.Blue};
    `};

  ${(props: styleProps) =>
    props.isTop &&
    css`
      width: 33.3%;
      padding: 0;
      @media (max-width: ${media.mobileL}px) {
        p {
          font-size: 1.4rem;
        }
      }
    `};
`;

export default CategoryItem;
