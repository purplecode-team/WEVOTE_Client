import * as React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import Header from './Header';
import backgroundIcon from '../../../public/img/backgroundIcon.svg';
import backgroundIcon2 from '../../../public/img/backgroundIcon2.svg';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <BackgroundBig src={backgroundIcon} alt="background image" />
    <BackgroundSmall src={backgroundIcon2} alt="background image" />
    <Main>{children}</Main>
  </>
);

const Main = styled.main`
  width: 100%;
  margin-top: 60px;
  overflow-x: hidden;
`;

const BackgroundBig = styled.img`
  display: none;
  position: fixed;
  z-index: -1;
  top: -384px;
  left: -82px;
  width: 988px;
  @media (max-width: ${media.mobileL}px) {
    width: 584px;
    height: 584px;
    left: -296px;
    top: -168px;
  }
`;

const BackgroundSmall = styled.img`
  display: none;
  position: fixed;
  z-index: -1;
  width: 563px;
  height: 563px;
  left: 1226px;
  top: 683px;
  @media (max-width: ${media.mobileL}px) {
    width: 246px;
    height: 246px;
    left: 248px;
    top: 496px;
  }
`;

export default Layout;
