import React from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';
import CardItem from './CardItem';

const CandidateCard = ({ cardData }) => {
  return (
    <Box>
      <NumberBlock>기호 {cardData.id}번</NumberBlock>
      <SloganBlock>"{cardData.slogan}"</SloganBlock>
      <InnerBox>
        <CardItem data={cardData.main} type />
        <CardItem data={cardData.sub} type={false} />
      </InnerBox>
    </Box>
  );
};

const Box = styled.div`
  flex: 1 0;
  max-width: 360px;
  padding: 22px 18px;
  padding-bottom: 5%;
  margin: 20px 35px 20px 35px;
  background: #ffffff;
  box-shadow: 0px 0px 20px ${theme.CardShadow};
  border-radius: 25px;
  box-sizing: border-box;
  @media (max-width: ${media.mobileL}px) {
    margin: 20px 0px 20px 20px;
  }
`;

const NumberBlock = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${theme.DarkBlue};
`;

const SloganBlock = styled.p`
  font-size: 1.6rem;
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
