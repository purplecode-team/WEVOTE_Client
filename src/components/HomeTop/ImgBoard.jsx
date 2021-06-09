import React from 'react';
import styled from 'styled-components';
import calender from '../../../public/img/calender.png';
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
  @media (max-width: ${media.mobileL}px) {
    margin-top: 0rem;
  }
`;
const CalenderImg = styled.img.attrs({
  src: Image.image,
  alt: 'img icon',
})`  
  @media (max-width: ${media.mobileL}px) {
    min-width:312px;
    width: 100%;
  }
`;
