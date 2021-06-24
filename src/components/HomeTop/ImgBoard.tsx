import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import Image from '../../api/ImageImport.json';

const ImgBoard = () => {
  return (
    <Calendar>
      <CalenderImg />
    </Calendar>
  );
};

export default ImgBoard;

const Calendar = styled.div`
  margin-top: 9.4rem;
  text-align: center;
  @media (max-width: ${media.mobileL}px) {
    margin-top: 0rem;
  }
`;
const CalenderImg = styled.img.attrs({
  src: Image.image,
  alt: 'img icon',
})`
  min-height: 700px;
  max-height: 100%;
  max-width: 95%;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: ${media.mobileL}px) {
    min-width: 312px;
    min-height: 400px;
    margin: 0 auto;
  }
`;
