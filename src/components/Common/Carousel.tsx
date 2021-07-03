import * as React from 'react';
import { useState, useEffect, Children } from 'react';
import styled, { css } from 'styled-components';
import media from '../../lib/styles/media';

let start = 0;
let diff = 0;
let now = 0;

type CarouselProps = {
  children: React.ReactNode;
  isLineBreak?: boolean;
  isCentralize?: boolean;
  handleCurrent?: (id: number) => void;
};

type styleProps = {
  locationX: number;
  isLineBreak?: boolean;
  isCentralize?: boolean;
};

// 공약 페이지 내 캐러셀 기능
// 웹 : 버튼 클릭 슬라이딩, px단위 이동, flex: nowrap, 후보 2팀 이하 중앙 정렬
// 모바일 : 스와이프 캐러셀, flex: nowrap, %단위 이동

// 메인 페이지 내 캐러셀
// 웹 : flex: wrap,
// 모바일 : 스와이프 캐러셀, flex: nowrap, %단위 이동

// locationX, currentTeamNum, swipePoint, swipeWidthPercent를 customHook으로 뺄 수 있을 듯
// swipePoint, swipeWidthPercent는 상수 값인데, state 객체 내 설정하고 불변성 유지하는게 재사용성에 더 좋을듯

// Classification
//  - ClassificationCategory
//      - Category
//           - CategoryItem x length (children)
//      - SlideCategory
//           - CategoryItem x length (children)
//      - SlideCategory
//           - CategoryItem x length (children)
//  - CandidateArticle
//      - Carousel
//          - EmptyCard x length (children)
//          - CandidateCard x length (children)

//  ==> CategoryItem 클릭하면, ClassificationCategory의 current 값 변경 되며 (current.top, current.middle, current.bottom 값 내려줌)

// Pledge(Page)
//  - CandidateSection
//       - CandidateArticleinPledge
//            - Carousel
//                 - CandidateCard x length
//  - PledgeSection
//       - PledgeCard x length
//  - CommentSection
//       - CommentInput
//       - CommentArticle
//            - Comment x length
//
//  ==> CadidateCard Carousel하면, Pldege(Page)의 handleCurrent 변경 시켜 나머지 컴포넌트에 current (현재 팀 번호) 제공 및 팀 데이터 하단으로

// redux 도입으로 상태 관리해서 하위 컴포넌트 리렌더링 방지하는 방향이 좋을 듯
// Carousel의 handleCurrent 적용으로, 현재 Pledge페이지 내 current 변경하면, 하위 컴포넌트 전체 리렌더링 되면서 Carousel의 children이 바뀌어서 locationX가 0으로 초기화됨

const Carousel = ({
  children,
  isLineBreak,
  isCentralize,
  handleCurrent,
}: CarouselProps) => {
  const [locationX, setLocationX] = useState(0);
  const [currentTeamNum, setCurrentTeamNum] = useState(0);

  const itemLength = Children.count(children);
  const swipePoint = 50;
  const swipeWidth = 90;

  //  줄바꿈 없고, team card 개수가 3개 미만이면, 중앙 정렬
  if (!isLineBreak && itemLength < 3) isCentralize = true;

  // 캐러셀 변경으로 currentTeamNum가 바뀌면, handleCurrent로 상위 컴포넌트의 current 값 변경
  useEffect(() => {
    if (handleCurrent) handleCurrent(currentTeamNum + 1);
  }, [currentTeamNum]);

  // children 변경 시, 캐러셀 위치 초기화
  useEffect(() => {
    setLocationX(0);
    setCurrentTeamNum(0);
  }, [children]);

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
      if (currentTeamNum === itemLength - 1) return;
      setLocationX(-swipeWidth * (currentTeamNum + 1));
      setCurrentTeamNum(currentTeamNum + 1);
    } else if (diff > swipePoint) {
      // 왼쪽 -> 오른쪽 swipe
      if (currentTeamNum === 0) return;
      setLocationX(-swipeWidth * (currentTeamNum - 1));
      setCurrentTeamNum(currentTeamNum - 1);
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
      isCentralize={isCentralize}
    >
      {children}
    </Wrapper>
  );
};

Carousel.defaultProps = {
  isLineBreak: false,
  isCentralize: false,
  handleCurrent: null,
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
    props.isCentralize &&
    css`
      justify-content: center;
      @media (max-width: ${media.mobileL}px) {
        justify-content: start;
      }
    `};
`;
