import media from '@styles/media';
import React from 'react';
import styled from 'styled-components';

type TemplateProps = {
  children: React.ReactNode;
};

const AuthTemplate = ({ children }: TemplateProps) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>{children}</WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

const AuthTemplateBlock = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 160px auto 100px;
  @media (max-width: ${media.mobileL}px) {
    width: 90%;
  }
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  width: 100%;
  height: 100%;
`;
