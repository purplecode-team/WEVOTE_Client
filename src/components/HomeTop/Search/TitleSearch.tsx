import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import media from '../../../lib/styles/media';
import SearchBox from './SearchBox';
import Modal from './FloatingActionButtonSize';

const TitleSearch = () => {
  return (
    <Contain>
      <Title>00대학교 선거소식</Title>
      <SearchWrapper>
        <SearchBox />
      </SearchWrapper>
      <MobileArea>
        <MobileSearch />
      </MobileArea>
    </Contain>
  );
};

export default TitleSearch;

const Contain = styled.div``;

const Title = styled.p`
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

const SearchIcon = styled(Fab)`
  display: none;
`;

const MobileArea = styled.div`
  display: none;
    @media (max-width: ${media.mobileL}px) {
    display: inline; 
  }
`
const MobileSearch = styled(Modal)`
  @media (max-width: ${media.mobileL}px) {
    
  }
`