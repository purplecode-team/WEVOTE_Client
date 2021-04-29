import * as React from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';
import CommentInput from './CommentInput';
import CommentArticle from './CommentArticle';

type qnaInfo = {
  id: number;
  type: string;
  comment: string;
  time: number;
};

type qnaArrayType = {
  qnaArray: qnaInfo[];
};

const CommentSection = ({ qnaArray }: qnaArrayType) => {
  return (
    <Section>
      <CommentBlock>
        <CommentInput />
        <CommentArticle qnaArray={qnaArray} />
      </CommentBlock>
    </Section>
  );
};

const Section = styled.section`
  width: ${media.laptop}px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
`;

const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 75px auto;
  box-sizing: border-box;
  @media (min-width: ${media.mobileL + 1}px) {
    min-height: 600px;
  }
  @media (max-width: ${media.mobileL}px) {
    min-width: 250px;
    min-height: 300px;
  }
`;

export default CommentSection;
