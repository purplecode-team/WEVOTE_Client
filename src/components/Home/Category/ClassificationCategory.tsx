import * as React from 'react';
import styled from 'styled-components';
import SlideCategory from './SlideCategory';
import CategoryItem from './CategoryItem';
import media from '../../../lib/styles/media';

type ClassificationProps = {
  onClick: (position: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  topList: string[];
  middleList: string[];
  bottomList: string[];
  current: { top: string; middle: string; bottom: string };
};

const ClassificationCategory = ({
  onClick,
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
        <SlideCategory isChange={current.top}>
          {middleList.map((item: string, index: number) => {
            return (
              <CategoryItem
                key={index}
                title={item}
                onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onClick('middle', e);
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
                  onClick('bottom', e);
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
