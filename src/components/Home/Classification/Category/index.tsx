import * as React from 'react';

import { useEffect, useRef } from 'react';

import CategoryItem from './CategoryItem';
import media from '@styles/media';
import styled from 'styled-components';

type ClassificationProps = {
  getNewMiddleList: (HTMLInputElement: any) => void;
  getNewBottomList: (HTMLInputElement: any) => void;
  handleBottomCurrentIndex: (HTMLInputElement: any) => void;
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
  const middleScrollRef = useRef<HTMLDivElement>(null);
  const bottomScrollRef = useRef<HTMLDivElement>(null);

  const handleMiddleList = (e) => {
    getNewMiddleList(e.target.innerText);
  };

  const handleBottomList = (e) => {
    getNewBottomList(e.target.innerText);
  };

  const handleBottomIndex = (e) => {
    handleBottomCurrentIndex(e.target.innerText);
  };

  useEffect(() => {
    if (bottomScrollRef.current === null) return;
    bottomScrollRef.current.scrollTo({
      top: bottomScrollRef.current.scrollTop,
      left: 0,
      behavior: 'auto',
    });
  }, [bottomList]);

  useEffect(() => {
    if (middleScrollRef.current === null) return;
    middleScrollRef.current.scrollTo({
      top: middleScrollRef.current.scrollTop,
      left: 0,
      behavior: 'auto',
    });
  }, [middleList]);

  return (
    <>
      <BackgroundBar color="#F6F3FD">
        <TopCategoryList>
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
        </TopCategoryList>
      </BackgroundBar>
      <BackgroundBar ref={middleScrollRef} color="#EAE3FF">
        <CategoryList>
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
        </CategoryList>
      </BackgroundBar>
      {bottomList[currentIndex.bottom] && (
        <BackgroundBar ref={bottomScrollRef} color="#F1ECFF">
          <CategoryList>
            {bottomList.map((item, index) => (
              <CategoryItem
                key={index}
                title={item}
                onClick={handleBottomIndex}
                isActive={item === bottomList[currentIndex.bottom]}
              />
            ))}
          </CategoryList>
        </BackgroundBar>
      )}
    </>
  );
};

const BackgroundBar = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryList = styled.ul`
  width: ${media.laptop}px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: ${media.mobileL}px) {
    flex-wrap: nowrap;
    width: max-content;
    margin: 0;
  }
`;

const TopCategoryList = styled.ul`
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
