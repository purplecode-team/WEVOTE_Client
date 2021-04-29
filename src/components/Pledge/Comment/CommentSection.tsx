import * as React from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';

const CommentSection = () => {
  return (
    <Article>
      <CommentBlock>
        <p>hi</p>
      </CommentBlock>
    </Article>
  );
};

const Article = styled.article`
  width: ${media.laptop}px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
`;

const CommentBlock = styled.div`
  width: 90%;
  height: 600px;
  margin: 75px auto;
  box-sizing: border-box;
  border: 1px solid #a5a5a5;
  @media (max-width: ${media.mobileL}px) {
    padding: 20px;
    width: 90%;
    min-width: 250px;
    height: 400px;
    overflow-y: scroll;
  }
`;

export default CommentSection;
