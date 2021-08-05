import * as React from 'react';

import CategoryItem from './CategoryItem';
import media from '../../../../lib/styles/media';
import SlideCategory from './SlideCategory';
import styled from 'styled-components';

type ClassificationProps = {
  getNewMiddleList: (HTMLInputElement: any) => () => void;
  getNewBottomList: (HTMLInputElement: any) => () => void;
  handleBottomCurrentIndex: (HTMLInputElement: any) => () => void;
  topList: string[];
  middleList: string[];
  bottomList: string[];
  currentIndex: { top: number; middle: number; bottom: number };
};

const ClassificationCategory = ({
  getNewMiddleList,
  getNewBottomList,
  handleBottomCurrentIndex,
  topList,
  middleList,
  bottomList,
  currentIndex,
}: ClassificationProps) => {

  const handleMiddleList = e => {
    getNewMiddleList(e.target.innerText)();
  }

  const handleBottomList = e => {
    getNewBottomList(e.target.innerText)();
  }

  const handleBottomIndex = e => {
    handleBottomCurrentIndex(e.target.innerText)();
  }

  return (
    <>
      <BackgroundBar color="#F6F3FD">
        <Category>
          {topList.map((item, index) => (
            <CategoryItem
              key={index}
              title={item}
              onClick={handleMiddleList}
              isActive={item === topList[currentIndex.top]}
              isTopActive={item === topList[currentIndex.top]}
              isTop
            />
          ))}
        </Category>
      </BackgroundBar>
      <BackgroundBar color="#EAE3FF">
        <SlideCategory isChange={topList[currentIndex.top]}>
          {middleList.map((item, index) => {
            return (
              <CategoryItem
                key={index}
                title={item}
                onClick={handleBottomList}
                isActive={item === middleList[currentIndex.middle]}
              />
            );
          })}
        </SlideCategory>
      </BackgroundBar>
      {bottomList[currentIndex.bottom] && (
        <BackgroundBar color="#F1ECFF">
          <SlideCategory isChange={middleList[currentIndex.middle]}>
            {bottomList.map((item, index) => (
              <CategoryItem
                key={index}
                title={item}
                onClick={handleBottomIndex}
                isActive={item === bottomList[currentIndex.bottom]}
              />
            ))}
          </SlideCategory>
        </BackgroundBar>
      )}
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
