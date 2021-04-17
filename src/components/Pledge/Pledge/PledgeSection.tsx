import * as React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';

const PledgeSection = () => {
  return (
    <Article>
      <PledgeBlock>
        <p>hi</p>
      </PledgeBlock>
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

const PledgeBlock = styled.div`
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  background-color: white;
  @media (max-width: ${media.mobileL}px) {
    width: 90%;
    min-width: 310px;
  }
`;

export default PledgeSection;
