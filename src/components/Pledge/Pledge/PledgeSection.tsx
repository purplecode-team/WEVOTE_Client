import * as React from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';
import PledgeCard from './PledgeCard';

type Pledge = {
  id: number;
  promiseType: string;
  promiseTitle: string;
  promiseDetail: string;
};

type PledgeArray = {
  pledgeArray: Pledge[];
  slogan: string;
};

const PledgeSection = ({ pledgeArray, slogan }: PledgeArray) => {
  return (
    <Article>
      <PledgeBlock>
        <SloganText>"{slogan}"</SloganText>
        <PledgeTable>
          {pledgeArray.map((pledge, index) => {
            return (
              <PledgeCard
                key={index}
                promiseType={pledge.promiseType}
                promiseTitle={pledge.promiseTitle}
                promiseDetail={pledge.promiseDetail}
              />
            );
          })}
        </PledgeTable>
      </PledgeBlock>
    </Article>
  );
};

const Article = styled.article`
  width: ${media.laptop}px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
`;

const PledgeBlock = styled.div`
  width: 90%;
  padding: 60px;
  padding-bottom: 90px;
  box-sizing: border-box;
  margin: 0 auto;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  background-color: white;
  @media (max-width: ${media.mobileL}px) {
    padding: 20px;
    width: 90%;
    min-width: 250px;
    height: 400px;
    overflow-y: scroll;
  }
`;

const SloganText = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 3rem;
  font-family: 'paybooc-extrabold', sans-serif;
  word-break: keep-all;
  color: ${theme.Blue};
  @media (max-width: ${media.mobileL}px) {
    font-size: 1.8rem;
    margin: 30px auto;
  }
`;

const PledgeTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export default PledgeSection;
