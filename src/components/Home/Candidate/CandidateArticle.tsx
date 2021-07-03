import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import CandidateCard from '../../Common/CandidateCard';
import EmptyCard from './EmptyCard';
import Carousel from '../../../utils/Carousel';
import img1 from '../../../../public/img/CardImg.svg';
import img2 from '../../../../public/img/CardImg2.svg';
import img3 from '../../../../public/img/CardImg3.svg';
import media from '../../../lib/styles/media';

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
};

const CandidateArticle = ({ title, teamArray }: CandidateArticleProps) => {
  const images = [img1, img2, img3];
  const showEmptyCard = () => {
    return images.map((image, index) => (
      <EmptyBlock key={index}>
        <EmptyCard url={image} />
      </EmptyBlock>
    ));
  };
  const showTeamCard = (teamArr: Team[]) => {
    return teamArr.map((team: Team) => (
      // <LinkBlock to={`/pledge?id=${team.id}`} key={team.id}>
      <LinkBlock to="/pledge?id=1" key={team.id}>
        <CandidateCard teamData={team} />
      </LinkBlock>
    ));
  };
  return (
    <Article>
      <CandidateTitle>{title} 후보</CandidateTitle>
      <InnerArticle>
        <Carousel isLineBreak>
          {/* props로 받은 후보자 데이터의 존재 유무에 따라 출력 Card 바뀜 */}
          {typeof teamArray === 'undefined' ||
          teamArray === null ||
          teamArray.length === 0
            ? showEmptyCard()
            : showTeamCard(teamArray)}
        </Carousel>
      </InnerArticle>
    </Article>
  );
};

const CandidateTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 20px 0px 40px 20px;
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

const InnerArticle = styled.article`
  overflow: hidden;
  color: ${theme.DarkBlue};
  color: ${theme.DarkBlue};
  padding-left: 20px;
`;

const LinkBlock = styled(Link)`
  text-decoration: none;
  color: black;
  @media (max-width: ${media.mobileL}px) {
    width: 90%;
  }
`;

const EmptyBlock = styled.div`
  width: 420px;
  @media (max-width: ${media.mobileL}px) {
    min-width: 90%;
  }
`;

export default CandidateArticle;
