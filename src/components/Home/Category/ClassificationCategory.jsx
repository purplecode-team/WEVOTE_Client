import React from 'react';
import styled from 'styled-components';
import SlideCategory from './SlideCategory';
import CategoryItem from './CategoryItem';
import media from '../../../lib/styles/media';

const ClassificationCategory = ({
  onClick,
  topList,
  middleList,
  bottomList,
  current,
}) => {
  return (
    <>
      <BackgroundBar color="#F6F3FD">
        <Category current={current}>
          {topList.map((item, index) => (
            <CategoryItem
              key={index}
              title={item}
              onClick={(e) => {
                onClick('top', e);
              }}
              isActive={item === current.top}
              isTopActive={item === current.top}
              isTop
            />
          ))}
        </Category>
      </BackgroundBar>
      <BackgroundBar color="#EAE3FF">
        <SlideCategory current={current}>
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
        </SlideCategory>
      </BackgroundBar>
      {/* bottomList의  */}
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

export default ClassificationCategory;
