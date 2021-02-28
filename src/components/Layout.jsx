import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../lib/styles/media';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <Section>{children}</Section>
  </>
);

const Section = styled.section`
  width: ${media.laptopM}px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fcfcfc;
`;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
