import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../../../public/img/search.svg';
import SelectBox from './SelectBox';

const TitleSearch = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleclick = () => {
    console.log('클릭');
  };

  return (
    <Contain>
      <Title>00대학교 선거소식</Title>
      {/* <SearchWrapper> */}
      {/*  <Search */}
      {/*    type="text" */}
      {/*    placeholder="선거명을 검색하세요" */}
      {/*    onChange={handleChange} */}
      {/*  /> */}
      {/*  <Button type="submit" onClick={handleclick}> */}
      {/*    <ButtonIcon /> */}
      {/*  </Button> */}
      {/* </SearchWrapper> */}
      <SelectBox />
    </Contain>
  );
};

export default TitleSearch;

const Contain = styled.div`
  height: 15.2rem;
`;

const Title = styled.p`
  font-family: 'paybooc-extrabold';
  font-size: 4rem;
  font-weight: 800;
  line-height: 49.36px;
  color: #252c44;
  margin-top: 104px;
  margin-left: 16px;
`;
const SearchWrapper = styled.div`
  margin-top: 5.2rem;
  postion: relative;
`;

const Search = styled.input`
  font-size: 1.4rem;
  border-radius: 3rem;
  width: 43.6rem;
  height: 4.6rem;
  padding-left: 2.6rem;
  position: absolute;
  filter: drop-shadow(0px 0px 0.4rem #8981b0);
  border: none;
  ::placeholder {
    color: #5d3fe8;
    opacity: 0.5;
  }
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  position: absolute;
  margin-top: 1.3rem;
  margin-left: 41.3rem;
  background-color: transparent;
  border: none;
  :focus {
    outline: none;
  }
`;

const ButtonIcon = styled.img.attrs({
  src: searchIcon,
  alt: 'search icon',
})`
  width: 100%;
`;
