import React from 'react';
import styled from 'styled-components';
import NoticeArticle from './NoticeArticle';
import bannerIcon from '../../../../public/img/bannerIcon.svg';
import media from '../../../lib/styles/media';

const Notice = () => {
  return (
    <NoticeBoard>
      <Container>
        <NoticeArticle />
        <bIcon />
      </Container>
    </NoticeBoard>
  );
};

export default Notice;

const NoticeBoard = styled.div`
  margin-top: 3.8rem;
  @media (max-width: ${media.mobileL}px) {
    margin-top: 1.6rem;
  }
`;
const Container = styled.div`
  margin-left: 1.6rem;
  width: 57.8rem;
  height: 13.6rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px #8881ae;
  border-radius: 10px;
  @media (max-width: ${media.mobileL}px) {
    width: 95%;
    height: 9.2rem;
    margin-left: 11px;

  }
`;

const bIcon = styled.img.attrs({
  src: bannerIcon,
  alt: 'banner icon',
})`
  width: 100%;
`;