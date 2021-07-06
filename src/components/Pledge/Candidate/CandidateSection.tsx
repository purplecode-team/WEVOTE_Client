import * as React from 'react';

import CandidateArticleInPledge from './CandidateArticleInPledge';
import media from '../../../lib/styles/media';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';

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

const CarouselSection = ({
  title,
  teamArray,
  current,
  handleCurrent,
}: CandidateArticleProps) => {
  return (
    <Background>
      <CandidateArticleInPledge
        title={title}
        teamArray={teamArray}
        current={current}
        handleCurrent={handleCurrent}
      />
    </Background>
  );
};

const Background = styled.section`
  background-color: ${theme.Blue};
  width: 100%;
  height: 650px;
  margin-bottom: -25px;
  @media (max-width: ${media.mobileL}px) {
    height: 600px;
  }
`;

export default CarouselSection;
