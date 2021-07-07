import media from '../../../../lib/styles/media';
import ModalSearchBox from './ModalSearchBox';
import React from 'react';
import SearchBox from './SearchBox';
import styled from 'styled-components';

const Search = () => {
  return (
    <Contain>
      <Title>00대학교 선거소식</Title>
      <SearchWrapper>
        <SearchBox />
      </SearchWrapper>
      <MobileArea>
        <ModalSearchBox />
      </MobileArea>
    </Contain>
  );
};

export default Search;

const Contain = styled.div``;

const Title = styled.h1`
  font-family: 'paybooc-extrabold';
  font-size: 4rem;
  font-weight: 800;
  line-height: 49.36px;
  color: #252c44;
  margin-top: 10.4rem;
  margin-left: 1.6rem;
  @media (max-width: ${media.mobileL}px) {
    font-size: 2.1rem;
    margin-top: 3.7rem;
    margin-left: 1.7rem;
  }
`;
const SearchWrapper = styled.div`
  position: relative;
  @media (max-width: ${media.mobileL}px) {
    display: none;
  }
`;

const MobileArea = styled.div`
  display: none;
  @media (max-width: ${media.mobileL}px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: grey;
  }
`;
