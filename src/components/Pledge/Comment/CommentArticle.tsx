import * as React from 'react';

import Comment from './Comment';
import styled from 'styled-components';

type qnaInfo = {
  id: number;
  type: string;
  comment: string;
  time: number;
};

type qnaArrType = {
  qnaArr: qnaInfo[];
};

const CommentArticle = ({ qnaArr }: qnaArrType) => {
  return (
    <Article>
      {qnaArr.map((qna, index) => {
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
