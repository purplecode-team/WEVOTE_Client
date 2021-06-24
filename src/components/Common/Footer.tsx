import * as React from 'react';
import styled from 'styled-components';
import theme from '../../lib/styles/theme';
import media from '../../lib/styles/media';
import logo from '../../../public/img/logoWhite.svg';

const Footer = () => {
  return (
    <FooterSection>
      <Logo />
      <Text>대학 온라인 선거 정보 제공 및 관리 서비스 위보트</Text>
      <Text>
        University Online Election Information and Management Services WEVOTE
      </Text>
      <Space />
      <Text>Master Email wevote.manager@gmail.com</Text>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  width: 100vw;
  height: 300px;
  background-color: ${theme.DarkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-top: 10px;
  text-align: center;
`;

const Space = styled.div`
  height: 20px;
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: 'logo',
})`
  width: 110px;
  margin-bottom: 30px;
  @media (max-width: ${media.mobileL}px) {
    margin: 0 10px;
  }
`;

export default Footer;
