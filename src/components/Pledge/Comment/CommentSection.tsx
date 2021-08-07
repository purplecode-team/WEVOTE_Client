import * as React from 'react';

import CommentArticle from './CommentArticle';
import CommentInput from './CommentInput';
import media from '../../../lib/styles/media';
import { qnaInfo } from '../../../types/candidateType';
import styled from 'styled-components';

type commentType = {
  qnaArr : qnaInfo[],
  teamId : number,
  setUrl : any,
}

const CommentSection = ({ qnaArr, teamId, setUrl }: commentType) => {
  return (
    <Section>
      <CommentBlock>
        <CommentInput teamId={teamId} setUrl={setUrl} />
        <CommentArticle qnaArr={qnaArr} />
      </CommentBlock>
    </Section>
  );
};

const Section = styled.section`
  width: ${media.laptop}px;
  height: 100%;
  margin: 75px auto;
  margin-bottom: 100px;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
    margin: 40px auto;
    margin-bottom: 100px;
  }
`;

const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0px auto;
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
