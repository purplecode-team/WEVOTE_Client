import React from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import CardItem from './CardItem';

const CandidateCard = ({ data, num }) => {
  return (
    <Box>
      <NumberBlock>기호 {num}번</NumberBlock>
      <SloganBlock>"{data.slogan}"</SloganBlock>
      <InnerBox>
        <CardItem data={data.main} type />
        <CardItem data={data.sub} type={false} />
      </InnerBox>
    </Box>
  );
};

const Box = styled.div`
  max-width: 290px;
  width: 290px;
  height: 360px;
  padding: 22px 18px;
  margin: 20px 16px;
  background: #ffffff;
  box-shadow: 0px 0px 20px #2a408b;
  border-radius: 25px;
  box-sizing: border-box;
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
