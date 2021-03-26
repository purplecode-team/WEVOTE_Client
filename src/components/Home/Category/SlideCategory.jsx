import React, { useState, Children, useEffect } from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';

let start = 0;
let now = 0;
let diff = 0;
const touchSpeed = 12;
const aveWidth = 140;
const aveView = 360;

const SlideCategory = ({ children, current }) => {
  const [locationX, setLocationX] = useState(0);

  useEffect(() => {
    setLocationX(0);
  }, [current.top]);

  const number = Children.count(children);

  const touchStart = (e) => {
    start = e.changedTouches[0].clientX;
  };

  const touchMove = (e) => {
    now = e.touches[0].clientX;
    diff = now - start;
    if (diff < 0) {
      // left
      setLocationX(locationX - touchSpeed);
    } else if (diff > 0) {
      // right
      setLocationX(locationX + touchSpeed);
    }
  };

  const touchEnd = () => {
    if (locationX > 0 || number < 3) {
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
  flex-wrap: wrap;
  @media (max-width: ${media.mobileL}px) {
    flex-wrap: nowrap;
    width: max-content;
    margin: 0;
    transform: translateX(${(props) => props.locationX}px);
  }
`;

export default SlideCategory;
