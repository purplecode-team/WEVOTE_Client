import React from 'react';
import styled from 'styled-components';
import NoticeArticle from './NoticeArticle';

const Notice = () => {
  return (
    <NoticeBoard>
      <Container>
        <NoticeArticle />
      </Container>
    </NoticeBoard>
  );
};

export default Notice;

const NoticeBoard = styled.div`
  margin-top: 3.8rem;
`;
const Container = styled.div`
  margin-left: 1.6rem;
  width: 57.8rem;
  height: 13.6rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px #8881ae;
  border-radius: 10px;
`;
