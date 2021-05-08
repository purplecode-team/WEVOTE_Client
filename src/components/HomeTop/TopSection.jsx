import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import TitleSearch from './Search/TitleSearch';
import UserCard from './UserCard/UserCard';
import Notice from './NoticeBoard/Notice';
import ImgBoard from './ImgBoard';

const TopSection = () => {
  return (
    <>
      <Top>
        <Container>
          <LeftTop>
            <TitleSearch />
            <UserCard />
            <Notice />
          </LeftTop>
          <ImgBoard />
        </Container>
      </Top>
    </>
  );
};

const Top = styled.div`
  width: 100%;
  background-color: #fafafa;
`;

const Container = styled.div`
  width: ${media.laptop}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'TitleSearch ImgBoard'
    'UserCard ImgBoard'
    'Notice ImgBoard';
`;

const LeftTop = styled.div``;

export default TopSection;
