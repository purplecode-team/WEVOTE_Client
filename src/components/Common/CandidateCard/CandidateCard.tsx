import * as React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';
import CardItem from '../../Common/CandidateCard/CardItem';

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
  isCurrent?: boolean;
};

type styleProps = {
  isCurrent?: boolean;
};

const CandidateCard = ({ teamData, isCurrent }: TeamProps) => {
  return (
    <Box isCurrent={isCurrent}>
      <NumberBlock>기호 {teamData.order}번</NumberBlock>
      <SloganBlock>"{teamData.slogan}"</SloganBlock>
      <InnerBox>
        <CardItem Runner={teamData.Runners[0]} type />
        <CardItem Runner={teamData.Runners[1]} type={false} />
      </InnerBox>
    </Box>
  );
};

CandidateCard.defaultProps = {
  isCurrent: true,
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
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${media.mobileL}px) {
    margin: 20px 10px 20px 20px;
  }
  ${(props: styleProps) =>
    !props.isCurrent &&
    css`
      opacity: 0.5;
    `};
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
