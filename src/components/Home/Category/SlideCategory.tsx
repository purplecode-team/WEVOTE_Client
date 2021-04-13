import * as React from 'react';
import { useState, Children, useEffect } from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';

type SlideCategoryProps = {
  children: React.ReactNode;
  isChange: string;
};

type styleProps = {
  locationX: number;
};

let start = 0;
let now = 0;
let diff = 0;
const aveWidth = 140;
const aveView = 360;
let beforeLocation = 0;

const SlideCategory = ({ children, isChange }: SlideCategoryProps) => {
  const [locationX, setLocationX] = useState(0);

  useEffect(() => {
    setLocationX(0);
  }, [isChange]);

  const number = Children.count(children);

  const touchStart = (e: React.TouchEvent) => {
    start = e.changedTouches[0].clientX;
  };

  // touchMove 이벤트 발생할 때마다 바로 직전 move 이벤트 x값과의 차이 만큼만 이동하게 구현
  const touchMove = (e: React.TouchEvent) => {
    now = e.touches[0].clientX;
    diff = now - start;
    setLocationX(beforeLocation + diff);
    start = now;
    beforeLocation += diff;
  };

  const touchEnd = () => {
    if (locationX > 0 || number < 3) {
      setLocationX(0);
      beforeLocation = 0;
      return;
    }
    // Category Item의 평균 크기와 평균 View Width 값으로 유동적인 Max값 예측
    const maxLocation = -number * aveWidth + aveView;
    if (locationX < maxLocation) {
      setLocationX(maxLocation);
      beforeLocation = maxLocation;
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
    transform: translateX(${(props: styleProps) => props.locationX}px);
  }
`;

export default SlideCategory;
