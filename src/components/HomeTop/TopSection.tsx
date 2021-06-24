import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import TitleSearch from './Search/TitleSearch';
import UserCard from './UserCard/UserCard';
import Notice from './NoticeBoard/Notice';
import ImgBoard from './ImgBoard';

const TopSection = () => {
  return (
    <Top>
      <Container>
         {/*<LeftTop>*/}
        <TitleArea />
        <User />
        <NoticeBoard />
        <ImgArea>
          <Img />
        </ImgArea>
         {/*</LeftTop>*/}
      </Container>
    </Top>
  );
};

const Top = styled.section`
  width: ${media.laptop}px;
  margin: 60px auto;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'TitleArea ImgBoardArea'
    'UserArea ImgBoardArea'
    'NoticeArea ImgBoardArea';
  @media (max-width: ${media.mobileL}px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      'TitleArea'
      'ImgBoardArea'
      'NoticeArea';
  }
`;

const LeftTop = styled.div``;
const TitleArea = styled(TitleSearch)`
  grid-area: TitleArea;
`;

const User = styled(UserCard)`
  grid-area: UserArea;
`;

const NoticeBoard = styled(Notice)`
  grid-area: NoticeArea;
`;

const Img = styled(ImgBoard)`
`;

const ImgArea = styled.div`
  grid-area: ImgBoardArea;
`;
export default TopSection;
