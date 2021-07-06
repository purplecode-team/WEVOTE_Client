import React from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';
import Search from './Search';
import InfoCard from './InfoCard';
import Notice from './Notice';
import Calender from './Calender';

const HomeBoard = () => {
  return (
    <Board>
      <TitleArea>
        <Search />
      </TitleArea>
      <UserArea>
        <InfoCard />
      </UserArea>
      <NoticeBoard>
        <Notice />
      </NoticeBoard>
      <ImgArea>
        <Calender />
      </ImgArea>
    </Board>
  );
};

export default HomeBoard;

const Board = styled.section`
  width: ${media.laptop}px;
  margin: 60px auto;
  display: grid;
  grid-template-rows: repeat(3, 300px);
  grid-template-columns: repeat(2, auto);
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(1, 1fr);
  }
`;


const TitleArea = styled.div`
`;

const UserArea = styled.div`
`;

const NoticeBoard = styled.div`
`;

const ImgArea = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  @media (max-width: ${media.mobileL}px) {
    grid-column: 1;
    grid-row: 2;
  }
`;
