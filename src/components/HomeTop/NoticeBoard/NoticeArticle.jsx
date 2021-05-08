import React from 'react';
import styled from 'styled-components';
import bannerData from '../../../api/BannerInfo.json';
import bannerIcon from '../../../../public/img/bannerIcon.svg';

const NoticeArticle = () => {
  return (
    <Container>
      <TitleBox>Notice</TitleBox>
      <ArticleBox>
        <Article>{bannerData.content}</Article>
      </ArticleBox>
      <Day>{bannerData.startDate}~</Day>
    </Container>
  );
};

export default NoticeArticle;
const Container = styled.div``;
const TitleBox = styled.div`
  display: inline-block;
  margin-top: 1.26rem;
  margin-left: 1.8rem;
  width: 8.4rem;
  height: 2.8rem;
  background-color: #5d3fe8;
  border-radius: 2rem;
  color: #ffffff;
  text-align: center;
  line-height: 2.8rem;
  font-size: 14px;
`;

const ArticleBox = styled.div`
  display: block;
  background-color: #f6f3fd;
  margin-top: 1.5rem;
  width: 57.8rem;
  height: 3.7rem;
`;

const Article = styled.div`
  margin-left: 2rem;
  font-size: 1.6rem;
  line-height: 3.5rem;
`;

const Day = styled.div`
  margin-top: 1.86rem;
  margin-left: 39.4rem;
  font-size: 1.3rem;
`;
