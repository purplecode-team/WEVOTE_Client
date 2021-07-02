import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../lib/styles/theme';
import Carousel from '../../utils/Carousel';
import Icon from '../../../public/img/InformationIcon.svg';
import img1 from '../../../public/img/information.png';
import img2 from '../../../public/img/information.png';
import img3 from '../../../public/img/information.png';
import media from '../../lib/styles/media';

const InformationSection = () => {
  const [images, setImages] = useState([img1, img2, img3, img1, img2, img3]);

  const showTeamCard = () => {
    return images.map((image, index) => (
      <Box key={index}>
        <Img src={image} alt="information" />
      </Box>
    ));
  };
  return (
    <Article>
      <IconBlock>
        <InformationIcon src={Icon} alt="information icon" />
      </IconBlock>
      <CandidateTitle>선거 안내</CandidateTitle>
      <InnerArticle>
        <Carousel isLineBreak isCentralize>
          {showTeamCard()}
        </Carousel>
      </InnerArticle>
    </Article>
  );
};

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InformationIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

const Box = styled.div`
  min-width: 300px;
  margin: 20px 35px 20px 35px;
  background: #ffffff;
  box-shadow: 0px 0px 20px ${theme.CardShadow}4d;
  border: 1px solid ${theme.CardDash};
  border-radius: 25px;
  box-sizing: border-box;
  overflow: hidden;
  @media (min-width: ${media.mobileL + 1}px) {
    width: 600px;
  }
  @media (max-width: ${media.mobileL}px) {
    max-width: 360px;
    flex: 1 0;
    margin: 20px 0px 20px 20px;
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
  @media (max-width: ${media.mobileL}px) {
    height: 400px;
  }
`;

const CandidateTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px;
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
  color: ${theme.DarkBlue};
  color: ${theme.DarkBlue};
  padding-left: 20px;
`;

export default InformationSection;
