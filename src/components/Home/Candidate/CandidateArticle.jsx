import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import CandidateCard from './CandidateCard';
import EmptyCard from './EmptyCard';
import Carousel from './Carousel';
import img1 from '../../../../public/img/CardImg.svg';
import img2 from '../../../../public/img/CardImg2.svg';
import img3 from '../../../../public/img/CardImg3.svg';
import media from '../../../lib/styles/media';

const CandidateArticle = ({ title, candidateData }) => {
  const images = [img1, img2, img3];
  const showEmptyCard = () => {
    return images.map((image, index) => (
      <EmptyBlock key={index}>
        <EmptyCard url={image} />
      </EmptyBlock>
    ));
  };
  const showCandidateCard = () => {
    return candidateData.map((cardData) => (
      <LinkBlock to={`/pledge?id=${cardData.query}`} key={cardData.id}>
        <CandidateCard cardData={cardData} />
      </LinkBlock>
    ));
  };
  return (
    <Article>
      <CandidateTitle>{title} 후보</CandidateTitle>
      <InnerArticle>
        <Carousel>
          {/* props로 받은 후보자 데이터의 존재 유무에 따라 출력 Card 바뀜 */}
          {typeof candidateData === 'undefined' ||
          candidateData === null ||
          Object.keys(candidateData).length === 0
            ? showEmptyCard()
            : showCandidateCard(candidateData)}
        </Carousel>
      </InnerArticle>
    </Article>
  );
};

const CandidateTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 20px 0px 40px 20px;
  @media (max-width: ${media.mobileL}px) {
    font-size: 1.6rem;
  }
`;

const Article = styled.article`
  width: ${media.laptop}px;
  margin: 0 auto;
  padding: 30px 0;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
    min-width: 320px;
  }
`;

const InnerArticle = styled.article`
  overflow: hidden;
  color: ${theme.darkBlue};
`;

const LinkBlock = styled(Link)`
  text-decoration: none;
  color: black;
  @media (max-width: ${media.mobileL}px) {
    width: 90%;
  }
`;

const EmptyBlock = styled.div`
  width: 426px;
  @media (max-width: ${media.mobileL}px) {
    min-width: 90%;
  }
`;

export default CandidateArticle;
