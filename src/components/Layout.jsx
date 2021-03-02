import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../lib/styles/media';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
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

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
