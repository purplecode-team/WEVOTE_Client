import React, { useState } from 'react';
import styled from 'styled-components';
import MiddleCategory from './MiddleCategory';
import CategoryItem from './CategoryItem';
import media from '../../../lib/styles/media';

const ClassificationMenu = ({
  onClick,
  topList,
  middleList,
  bottomList,
  current,
}) => {
  return (
    <>
      <BackgroundBar color="#F6F3FD">
        <Category>
          {topList.map((item, index) => (
            <CategoryItem
              key={index}
              title={item}
              onClick={(e) => {
                onClick('top', e);
              }}
              isActive={item === current.top}
              isTopActive={item === current.top}
            />
          ))}
        </Category>
      </BackgroundBar>
      <BackgroundBar color="#EAE3FF">
        <MiddleCategory
          current={current}
          onClick={onClick}
          middleList={middleList}
        >
          {middleList.map((item, index) => (
            <CategoryItem
              key={index}
              title={item}
              onClick={(e) => {
                onClick('middle', e);
              }}
              isActive={item === current.middle}
            />
          ))}
        </MiddleCategory>
      </BackgroundBar>
      {/* parseInt의 두번째 파라미터는 radix 즉, 변환할 진수 값 의미함 */}
      {parseInt(bottomList[1], 10) ? null : (
        <BackgroundBar color="#F1ECFF">
          <Category>
            {bottomList.map((item, index) => (
              <CategoryItem
                key={index}
                title={item}
                onClick={(e) => {
                  onClick('bottom', e);
                }}
                isActive={item === current.bottom}
              />
            ))}
          </Category>
        </BackgroundBar>
      )}
    </>
  );
};

const BackgroundBar = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
`;

const Category = styled.ul`
  width: ${media.laptop}px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
`;

export default ClassificationMenu;
