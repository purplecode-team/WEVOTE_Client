import * as React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';
import CandidateArticleInPledge from './CandidateArticleInPledge';

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

const CarouselSection = ({ title, teamArray }: CandidateArticleProps) => {
  return (
    <Background>
      <CandidateArticleInPledge title={title} teamArray={teamArray} />
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
