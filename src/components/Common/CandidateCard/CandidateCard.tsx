import * as React from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';
import CardItem from './CardItem';

type Runner = {
  id: number;
  name: string;
  major: string;
  studentNum: number;
  position: string;
  picture?: string;
  teamId: number;
};

type Team = {
  id: number;
  order: number;
  slogan: string;
  Runners: Runner[];
};

type TeamProps = {
  teamData: Team;
};

const CandidateCard = ({ teamData }: TeamProps) => {
  return (
    <Box>
      <NumberBlock>기호 {teamData.order}번</NumberBlock>
      <SloganBlock>"{teamData.slogan}"</SloganBlock>
      <InnerBox>
        <CardItem Runner={teamData.Runners[0]} type />
        <CardItem Runner={teamData.Runners[1]} type={false} />
      </InnerBox>
    </Box>
  );
};

const Box = styled.div`
  flex: 1 0;
  max-width: 360px;
  padding: 22px 18px;
  padding-bottom: 5%;
  margin: 20px 30px 20px 30px;
  background: #ffffff;
  box-shadow: 0px 0px 20px ${theme.CardShadow};
  border-radius: 25px;
  box-sizing: border-box;
  @media (max-width: ${media.mobileL}px) {
    margin: 20px 10px 20px 20px;
  }
`;

const NumberBlock = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${theme.DarkBlue};
`;

const SloganBlock = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.Blue};
  text-align: center;
  margin: 30px 0;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default CandidateCard;
