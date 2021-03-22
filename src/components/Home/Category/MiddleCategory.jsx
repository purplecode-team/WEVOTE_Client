import React, { useState, Children, useEffect } from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';

let start = 0;
const touchSpeed = 12;
const aveWidth = 130;
const aveView = 360;

const MiddleCategory = ({ children, current }) => {
  const [locationX, setLocationX] = useState(0);
  useEffect(() => {
    setLocationX(0);
  }, [current.top]);

  const number = Children.count(children);
  const touchStart = (e) => {
    start = e.changedTouches[0].clientX;
  };

  const touchMove = (e) => {
    const now = e.touches[0].clientX;
    const diff = now - start;
    if (diff < 0) {
      // left
      setLocationX(locationX - touchSpeed);
    } else if (diff > 0) {
      // right
      setLocationX(locationX + touchSpeed);
    }
  };

  const touchEnd = () => {
    if (locationX > 0 || number < 4) {
      setLocationX(0);
      return;
    }
    if (locationX < -number * aveWidth + aveView) {
      setLocationX(-number * aveWidth + aveView);
    }
  };

  return (
    <Category
      onTouchMove={touchMove}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      locationX={locationX}
    >
      {children}
    </Category>
  );
};

const Category = styled.ul`
  width: ${media.laptop}px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  @media (max-width: ${media.mobileL}px) {
    width: max-content;
    margin: 0;
    transform: translateX(${(props) => props.locationX}px);
  }
`;

export default React.memo(MiddleCategory);
