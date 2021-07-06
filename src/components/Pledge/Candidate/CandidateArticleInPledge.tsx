import * as React from 'react';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import CandidateCard from '../../Common/CandidateCard';
import Carousel from '../../Common/Carousel';
import media from '../../../lib/styles/media';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import { useState } from 'react';

type Runner = {
  id: number;
  name: string;
  major: string;
  studentNum: number;
  position: string;
  picture?: string;
  teamId: number;
};

type Promise = {
  id?: number;
  promiseType?: string;
  promiseTitle?: string;
  promiseDetail?: string;
};

type comment = {
  comment?: string;
  time?: number;
};

type question = {
  id?: number;
  question?: string;
  time?: number;
  answer?: comment[];
};

type Team = {
  id: number;
  order: number;
  slogan: string;
  Runners: Runner[];
  Promises?: Promise[];
  qna?: question[];
};

type CandidateArticleProps = {
  title: string;
  teamArray: Team[];
  current: number;
  handleCurrent: (id: number) => void;
};

type styleProps = {
  locationX: number;
};

const CandidateArticleInPledge = ({
  title,
  teamArray,
  current,
  handleCurrent,
}: CandidateArticleProps) => {
  const [locationX, setLocationX] = useState(0);
  const [count, setCount] = useState(teamArray.length - 3);
  const moveWidth = 420;

  const onMoveRight = () => {
    if (count < 1) return;
    setLocationX(locationX - moveWidth);
    setCount(count - 1);
  };

  const onMoveLeft = () => {
    if (locationX === 0) return;
    setLocationX(locationX + moveWidth);
    setCount(count + 1);
  };

  const showTeamCard = (teamArr: Team[]) => {
    return teamArr.map((team: Team) => {
      const isCurrent = current === team.order;
      return (
        <CardBlock key={team.id} onClick={() => handleCurrent(team.order)}>
          <CandidateCard teamData={team} isCurrent={isCurrent} />
        </CardBlock>
      );
    });
  };

  return (
    <Article>
      <BarIcon>l</BarIcon>
      <CandidateTitle>{title} 후보</CandidateTitle>
      <InnerArticle locationX={locationX}>
        <Carousel
          isLineBreak={false}
          isCentralize={false}
          handleCurrent={handleCurrent}
        >
          {showTeamCard(teamArray)}
        </Carousel>
      </InnerArticle>
      <LeftIcon onClick={onMoveLeft} />
      <RightIcon onClick={onMoveRight} />
    </Article>
  );
};

const LeftIcon = styled(BsChevronLeft)`
  position: absolute;
  top: 290px;
  left: -15px;
  color: white;
  width: 50px;
  height: 80px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  @media (max-width: ${media.mobileL}px) {
    display: none;
  }
`;

const RightIcon = styled(BsChevronRight)`
  position: absolute;
  top: 290px;
  right: -15px;
  color: white;
  width: 50px;
  height: 80px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  @media (max-width: ${media.mobileL}px) {
    display: none;
  }
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
  position: relative;
  width: ${media.laptop}px;
  margin: 0 auto;
  padding: 30px 0;
  overflow-x: hidden;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
    min-width: 320px;
  }
`;

const InnerArticle = styled.article`
  color: ${theme.DarkBlue};
  padding-left: 20px;
  @media (min-width: ${media.mobileL + 1}px) {
    transform: translateX(${(props: styleProps) => props.locationX}px);
    transition: transform 300ms;
  } ;
`;

const CardBlock = styled.div`
  @media (max-width: ${media.mobileL}px) {
    width: 90%;
  }
`;

export default CandidateArticleInPledge;
