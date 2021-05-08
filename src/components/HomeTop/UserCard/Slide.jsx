import React from 'react';
import styled from 'styled-components';

const Slide = ({ data }) => {
  const { name } = data;
  const { numOfTeam } = data;
  const { type } = data;
  const sdate = data.startDate;
  const edate = data.endDate;

  return (
    <CardBox>
      <Article>
        <NameBlock>{name}</NameBlock>
        <ElectionType>{type}</ElectionType>
        <CandidateBlock>후보: {numOfTeam}</CandidateBlock>
        <DateBlock>투표기간</DateBlock>
        <Date>
          {sdate}~{edate}
        </Date>
      </Article>
    </CardBox>
  );
};

export default Slide;

const CardBox = styled.div`
  display: inline-block;
  width: 170px;
  height: 224px;
  margin-right: 34px;
  background-color: #5d3fe8;
  border-radius: 2rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  :hover {
    background-color: #252c44;
  }
`;

const Article = styled.div`
  margin: 26px 28px;
  word-wrap: break-word;
  color: white;
  font-size: 1.5rem;
`;

const NameBlock = styled.div`
  line-height: 1.9rem;
`;
const ElectionType = styled.div`
  margin-top: 1.5rem;
`;
const CandidateBlock = styled.div`
  margin-top: 3.9rem;
`;
const DateBlock = styled.div`
  margin-top: 3.1rem;
`;
const Date = styled.div`
  margin-top: 0.5rem;
`;
