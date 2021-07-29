import * as React from 'react';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import styled, { css } from 'styled-components';

import CandidateCard from '../../Common/CandidateCard';
import Carousel from '../../Common/Carousel';
import media from '../../../lib/styles/media';
import { Team } from '../../../types/candidateType';
import theme from '../../../lib/styles/theme';
import { useState } from 'react';

type CandidateArticleProps = {
  title: string;
  teamArr: Team[];
  current: number;
  setCurrent: (id: number) => void;
};

type styleProps = {
  isCurrent?: boolean,
  mobileMargin?: number;
  laptopMargin?:number;
};

const BoxSize = 360;
const CandidateInPledge = ({ title, teamArr, current, setCurrent }: CandidateArticleProps) => {
  const [locationX, setLocationX] = useState(0);
  const [count, setCount] = useState(0);

  const laptopMargin = (media.laptop-BoxSize*3)/6;
  const mobileMargin = (window.innerWidth - window.innerWidth*0.75) / 2

  const onMoveRight = () => {
    if (count+2 >= teamArr.length -1) return;
    setLocationX(locationX - (BoxSize+laptopMargin*2));
    setCount(count + 1);
  };

  const onMoveLeft = () => {
    if (locationX === 0) return;
    setLocationX(locationX + (BoxSize+laptopMargin*2));
    setCount(count - 1);
  };


  const showTeamCard = () => {
    return teamArr.map((obj, index) => (
      <Box
        key={index}
        isCurrent={current === index}
        onClick={()=>{setCurrent(index)}}
        laptopMargin={laptopMargin}
        mobileMargin={mobileMargin}>
        <CandidateCard teamData={obj} />
      </Box>
    ));
  };

  return (
    <Article>
      <BarIcon>l</BarIcon>
      <CandidateTitle>{title} 후보</CandidateTitle>
      <InnerArticle>
        <Carousel 
          isCentralize={teamArr.length < 3}
          locationX={locationX}
          setLocationX={setLocationX}
          count={count}
          setCount={setCount}
          maxCount={teamArr.length}
        >
          {showTeamCard()}
        </Carousel>
        <LeftIcon onClick={onMoveLeft} />
        <RightIcon onClick={onMoveRight} />
      </InnerArticle>
    </Article>
  );
};

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 20px ${theme.CardShadow}4d;
  border: 1px solid ${theme.CardDash};
  border-radius: 25px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  @media (min-width: ${media.mobileL + 1}px) {
    margin: 20px ${(props: styleProps) => props.laptopMargin}px;
    min-width: ${BoxSize}px;
  }
  @media (max-width: ${media.mobileL}px) {
    margin: 20px ${(props: styleProps) => props.mobileMargin}px;
    max-width: 360px;
    min-width: 75vw;
    flex: 1 0;
  }
  ${(props: styleProps) =>
    !props.isCurrent &&
    css`
      opacity: 0.5;
    `};
`;

const BarIcon = styled.span`
  font-size: 2.8rem;
  font-weight: bold;
  color: white;
  font-family: 'paybooc-extrabold', sans-serif;
  vertical-align: sub;
  margin-left: 20px;
  margin-right: 10px;
`;
const CandidateTitle = styled.h2`
  display: inline-block;
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  margin: 20px 0px;
  @media (max-width: ${media.mobileL}px) {
    font-size: 1.6rem;
  }
`;

const Article = styled.article`
  width: ${media.laptop}px;
  margin: 0 auto;
  padding: 30px 0;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
    min-width: 320px;
  }
`;

const LeftIcon = styled(BsChevronLeft)`
  position: absolute;
  top: 40%;
  left: -10px;
  color: ${theme.LightGray};
  width: 50px;
  height: 80px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    color: ${theme.DarkBlue}
  }
  @media (max-width: ${media.mobileL}px) {
    display: none;
  }
`;

const RightIcon = styled(BsChevronRight)`
  position: absolute;
  top: 40%;
  right: -10px;
  color: ${theme.LightGray};
  width: 50px;
  height: 80px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    color: ${theme.DarkBlue};
  }
  @media (max-width: ${media.mobileL}px) {
    display: none;
  }
`;

const InnerArticle = styled.article`
  position: relative;
  overflow: hidden;
`;

export default CandidateInPledge;
