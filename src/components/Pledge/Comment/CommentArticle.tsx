import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';
import theme from '../../../lib/styles/theme';
import Comment from './Comment';

type qnaInfo = {
  id: number;
  type: string;
  comment: string;
  time: number;
};

type qnaArrayType = {
  qnaArray: qnaInfo[];
};

const CommentArticle = ({ qnaArray }: qnaArrayType) => {
  return (
    <Article>
      {qnaArray.map((qna, index) => {
        if (qna.type === 'question') {
          return <Comment key={index} qna={qna} />;
        }
        if (qna.type === 'answer') {
          return <Comment key={index} qna={qna} answer />;
        }
      })}
    </Article>
  );
};

const Article = styled.article`
  width: 100%;
`;

export default CommentArticle;
