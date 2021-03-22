import React from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import CandidateCard from './CandidateCard';
import Carousel from './Carousel';
import media from '../../../lib/styles/media';

const CandidateArticle = ({ title, data }) => {
  const department = title;

  return (
    <Article>
      <CandidateTitle>{department} 후보</CandidateTitle>
      <InnerArticle>
        <Carousel>
          {data.map((cardData) => (
            <CandidateCard
              key={cardData.id}
              data={cardData}
              num={cardData.id}
            />
          ))}
        </Carousel>
      </InnerArticle>
    </Article>
  );
};

const Article = styled.article`
  width: ${media.laptop}px;
  margin: 0 auto;
  padding: 30px 0;
`;

const InnerArticle = styled.article`
  overflow: hidden;
  color: ${theme.darkBlue};
`;

const CandidateTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 20px 0px 40px 20px;
`;

export default CandidateArticle;
