import * as React from 'react';

import CategoryItem from './CategoryItem';
import media from '../../../../lib/styles/media';
import SlideCategory from './SlideCategory';
import styled from 'styled-components';

type ClassificationProps = {
  changeCurrent: (
    position: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  topList: string[];
  middleList: string[];
  bottomList: string[];
  current: { top: string; middle: string; bottom: string };
};

const ClassificationCategory = ({
  changeCurrent,
  topList,
  middleList,
  bottomList,
  current,
}: ClassificationProps) => {
  return (
    <>
      <BackgroundBar color="#F6F3FD">
        <Category>
          {topList.map((item, index) => (
            <CategoryItem
              key={index}
              title={item}
              onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                changeCurrent('top', e);
              }}
              isActive={item === current.top}
              isTopActive={item === current.top}
              isTop
            />
          ))}
        </Category>
      </BackgroundBar>
      <BackgroundBar color="#EAE3FF">
        <SlideCategory isChange={current.top}>
          {middleList.map((item, index) => {
            return (
              <CategoryItem
                key={index}
                title={item}
                onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                  changeCurrent('middle', e);
                }}
                isActive={item === current.middle}
              />
            );
          })}
        </SlideCategory>
      </BackgroundBar>
      {current.bottom ? (
        <BackgroundBar color="#F1ECFF">
          <SlideCategory isChange={current.middle}>
            {bottomList.map((item, index) => (
              <CategoryItem
                key={index}
                title={item}
                onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                  changeCurrent('bottom', e);
                }}
                isActive={item === current.bottom}
              />
            ))}
          </SlideCategory>
        </BackgroundBar>
      ) : null}
    </>
  );
};

const BackgroundBar = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Category = styled.ul`
  max-width: 100%;
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
