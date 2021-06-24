import React from 'react';
import styled from 'styled-components';

const Slide = ({ data }) => {
  const dateFormat = date =>{
    var n_date;
    n_date = date.slice(3,5)<10 ? date.replace(date.slice(3,5),date.slice(4,5)): date;
    n_date = n_date.slice(0,2)<10 ? n_date.replace(n_date.slice(0,2), n_date.slice(1,2)) : n_date;
    return n_date;
  };
  const name = data.name;
  const numOfTeam = data.numOfTeam;
  const type = data.type;

  const sdate_bformat = (data.startDate.slice(5,10)).replace('-','/');
  const edate_bformat = (data.endDate.slice(5,10)).replace('-','/');

  const sdate = dateFormat(sdate_bformat);
  const edate = dateFormat(edate_bformat);

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
