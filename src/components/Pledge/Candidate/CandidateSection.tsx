import * as React from 'react';

import CandidateArticleInPledge from './CandidateArticleInPledge';
import media from '../../../lib/styles/media';
import styled from 'styled-components';
import { Team } from '../../../types/candidateType';
import theme from '../../../lib/styles/theme';

type CandidateArticleProps = {
  title: string;
  teamArr: Team[];
  current: number;
  setCurrent: (id: number) => void;
};

const CarouselSection = ({
  title,
  teamArr,
  current,
  setCurrent,
}: CandidateArticleProps) => {
  return (
    <Background>
      <CandidateArticleInPledge
        title={title}
        teamArr={teamArr}
        current={current}
        setCurrent={setCurrent}
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
