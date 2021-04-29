import * as React from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';
import CandidateCard from './CandidateCard';
import Carousel from './Carousel';

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

const CandidateArticleInPledge = ({
  title,
  teamArray,
  current,
  handleCurrent,
}: CandidateArticleProps) => {
  const showTeamCard = (teamArr: Team[]) => {
    return teamArr.map((team: Team) => (
      <CardBlock key={team.id} onClick={() => handleCurrent(team.order)}>
        <CandidateCard teamData={team} current={current} />
      </CardBlock>
    ));
  };
  return (
    <Article>
      <CandidateTitle>{title} 후보</CandidateTitle>
      <InnerArticle>
        <Carousel isLineBreak={false} handleCurrent={handleCurrent}>
          {showTeamCard(teamArray)}
        </Carousel>
      </InnerArticle>
    </Article>
  );
};

const CandidateTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  color: white;
  margin: 20px 0px 20px 20px;
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
  padding-left: 20px;
`;

const CardBlock = styled.div`
  @media (max-width: ${media.mobileL}px) {
    width: 90%;
  }
`;

export default CandidateArticleInPledge;
