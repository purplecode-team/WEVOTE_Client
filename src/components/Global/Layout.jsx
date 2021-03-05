import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';
import Header from './Header';
import round from '../../../public/img/round.svg';
import round2 from '../../../public/img/round2.svg';

const Layout = ({ children }) => (
  <>
    <Header />
    <BackgroundBig src={round} alt="background image" />
    <BackgroundSmall src={round2} alt="background image" />
    <Main>{children}</Main>
  </>
);

const Main = styled.main`
  @media (min-width: ${media.mobileL + 1}px) {
    max-width: ${media.laptop}px;
  }
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
  margin: 0 auto;
`;

const BackgroundBig = styled.img`
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

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
