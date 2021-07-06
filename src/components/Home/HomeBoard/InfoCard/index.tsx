import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import media from '../../../../lib/styles/media';

const InfoCard = () => {
  return (
    <Candidate>
      <Carousel />
    </Candidate>
  );
};

export default InfoCard;

const Candidate = styled.div`
  @media (max-width: ${media.mobileL}px) {
    display: none;
  }
`;
