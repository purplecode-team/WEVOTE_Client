import * as React from 'react';

import { Children, useEffect } from 'react';
import styled, { css } from 'styled-components';

import media from '../../lib/styles/media';

let start = 0;
let diff = 0;
let now = 0;

type CarouselProps = {
  children: React.ReactNode;
  isLineBreak?: boolean;
  isCentralize?: boolean;
  locationX: number;
  setLocationX: (count: number) => void;
  count: number;
  setCount: (num: number) => void;
  maxCount?: number;
  setCurrent?: (count: number) => void;
};

type styleProps = {
  locationX: number;
  isLineBreak?: boolean;
  isCentralize?: boolean;
};

const Carousel = ({
  children,
  isLineBreak,
  isCentralize,
  locationX,
  setLocationX,
  count,
  setCount,
  setCurrent,
  maxCount
}: CarouselProps) => {

  const itemLength = maxCount || Children.count(children);
  const swipePoint = 50;

  const touchStart = (e: React.TouchEvent) => {
    start = e.changedTouches[0].clientX;
  };

  const touchMove = (e: React.TouchEvent) => {
    now = e.touches[0].clientX;
    diff = now - start;
  };

  const touchEnd = () => {
    if (diff < -swipePoint) {
      // 오른쪽 -> 왼쪽 swipe
      if (count >= itemLength - 1) return;
      const nextCount = count += 1
      setCount(nextCount);
      setLocationX(-100 * (nextCount));
    } else if (diff > swipePoint) {
      // 왼쪽 -> 오른쪽 swipe
      if (count === 0) return;
      const nextCount = count -= 1
      setCount(nextCount);
      setLocationX(-100 * (nextCount));
    }
    diff = 0;
  };

  useEffect(()=>{
    if (setCurrent) {
      setCurrent(count);
    }
    return () => {null};
  },[count])

  return (
    <Wrapper
      onTouchMove={touchMove}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      locationX={locationX}
      isLineBreak={isLineBreak}
      isCentralize={isCentralize}
    >
      {children}
    </Wrapper>
  );
};

Carousel.defaultProps = {
  isLineBreak: false,
  isCentralize: false,
  maxCount:0
};

export default Carousel;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  transition: transform 300ms;
  transform: translateX(${(props: styleProps) => props.locationX}px);
  @media (max-width: ${media.mobileL}px) {
    flex-wrap: nowrap;
    transform: translateX(${(props: styleProps) => props.locationX}vw);
    justify-content: start;

  }
  ${(props: styleProps) =>
    props.isLineBreak &&
    css`
      flex-wrap: wrap;
    `};
  ${(props: styleProps) =>
    props.isCentralize &&
    css`
      justify-content: center;
    `};
`;
