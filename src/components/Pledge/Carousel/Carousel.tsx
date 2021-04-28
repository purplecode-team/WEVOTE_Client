import * as React from 'react';
import { useState, useEffect, Children } from 'react';
import styled, { css } from 'styled-components';
import media from '../../../lib/styles/media';

let start = 0;
let diff = 0;
let now = 0;

type CarouselProps = {
  children: React.ReactNode;
  isLineBreak: boolean;
  handleCurrent: (id: number) => void;
};

type styleProps = {
  locationX: number;
  isLineBreak?: boolean;
  smallLength: boolean;
};

const Carousel = ({ children, isLineBreak, handleCurrent }: CarouselProps) => {
  const [locationX, setLocationX] = useState(0);
  const [count, setCount] = useState(0);

  const itemNums = Children.count(children) - 1;
  let smallLength = false;
  if (itemNums < 2) smallLength = true;

  useEffect(() => {
    handleCurrent(count + 1);
  }, [count]);

  const touchStart = (e: React.TouchEvent) => {
    start = e.changedTouches[0].clientX;
  };

  const touchMove = (e: React.TouchEvent) => {
    now = e.touches[0].clientX;
    diff = now - start;
  };

  const touchEnd = () => {
    if (diff < -50) {
      // 왼쪽으로 swipe
      if (count === itemNums) return;
      setLocationX(-90 * (count + 1));
      setCount(count + 1);
    } else if (diff > 50) {
      // 오른쪽으로 swipe
      if (count === 0) return;
      setLocationX(-90 * (count - 1));
      setCount(count - 1);
    }
    diff = 0;
  };
  return (
    <Wrapper
      onTouchMove={touchMove}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      locationX={locationX}
      isLineBreak={isLineBreak}
      smallLength={smallLength}
    >
      {children}
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  transition: transform 300ms;
  @media (max-width: ${media.mobileL}px) {
    flex-wrap: nowrap;
    transform: translateX(${(props: styleProps) => props.locationX}%);
  }
  ${(props: styleProps) =>
    props.isLineBreak &&
    css`
      flex-wrap: wrap;
    `};
  ${(props: styleProps) =>
    props.smallLength &&
    css`
      justify-content: center;
    `};
`;
