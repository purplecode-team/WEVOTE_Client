import * as React from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';

type EmptyCardProps = {
  url: string;
};

const EmptyCard = ({ url }: EmptyCardProps) => {
  return (
    <Box>
      <BackgroundImg src={url} alt="empty card" />
      <Description>후보가 등록되어있지 않습니다.</Description>
    </Box>
  );
};

const Box = styled.div`
  flex: 1 0;
  max-width: 360px;
  padding: 19% 10px;
  margin: 20px 35px 20px 35px;
  background: #ffffff;
  box-shadow: 0px 0px 20px ${theme.CardShadow}4d;
  border: 4px dashed ${theme.CardDash};
  border-radius: 25px;
  box-sizing: border-box;
  @media (min-width: ${media.mobileL + 1}px) {
    width: 356px;
  }
  @media (max-width: ${media.mobileL}px) {
    margin: 20px 0px 20px 20px;
  }
`;

const BackgroundImg = styled.img`
  width: 90%;
  height: 210px;
  display: block;
  margin: 20px auto;
`;

const Description = styled.p`
  font-family: 'pacbooc-medium', sans-serif;
  font-size: 1.8rem;
  text-align: center;
  color: ${theme.SoftPurple};
  @media (max-width: ${media.mobileL}px) {
    font-size: 1.4rem;
  }
`;

export default EmptyCard;
