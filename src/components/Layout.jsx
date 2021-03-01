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
  width: ${media.laptop}px;
  margin: 0 auto;
`;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
