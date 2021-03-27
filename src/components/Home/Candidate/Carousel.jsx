import React, { useState, useEffect, Children } from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';

let start = 0;
let diff = 0;
let now = 0;

const Carousel = ({ children }) => {
  const [locationX, setLocationX] = useState(0);
  const [count, setCount] = useState(0);

  const itemNums = Children.count(children) - 1;

  useEffect(() => {
    setLocationX(0);
    setCount(0);
  }, [children]);

  const touchStart = (e) => {
    start = e.changedTouches[0].clientX;
  };

  const touchMove = (e) => {
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
  };
  return (
    <Wrapper
      onTouchMove={touchMove}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      locationX={locationX}
    >
      {children}
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  transition: transform 300ms;
  @media (max-width: ${media.mobileL}px) {
    flex-wrap: nowrap;
    transform: translateX(${(props) => props.locationX}%);
  }
`;
