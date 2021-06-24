import React, { useState } from 'react';
import styled from 'styled-components';
import Select, { components } from 'react-select';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import deptData from '../../../api/SearchDept.json';
import info from '../../../pages/Info';
import searchIcon from '../../../../public/img/search.svg';
import media from '../../../lib/styles/media';

const SelectBox = () => {
  const department = [];

  deptData.map((data) => {
    department.push({ value: data.id, label: data.name });
  });

  const customSelectBox = {
    department: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #979797',
      width: '43.6rem',
      borderRadius: 5,
    }),
    control: () => ({
      width: '43.6rem',
      height: '4.6rem',
      border: 'none',
      marginLeft: '1.6rem',
      paddingLeft: '2.6rem',
      fontSize: '1.4rem',
      filter: 'drop-shadow(0px 0px 0.4rem #8981b0)',
      opacity: '0.5',
      display: 'flex',
      borderRadius: '300px',
      backgroundColor: '#FFFFFF',
    }),
    valueContainer: (provided) => ({
      ...provided,
      width: 436,
    }),
    menu: () => ({
      marginLeft: '3rem',
      width: '43.6rem',
      fontSize: '1.4rem',
      backgroundColor: '#FFFFFF',
    }),
  };
  const [selectedDept, setSelectedDept] = useState(null);
  const goLink = () => {
    if (selectedDept !== null) {
      const link = `info/${selectedDept.value}`;
      window.location.href = link;
    }
  };

  return (
    <BoxContainer>
      <CustomSelect
        defaultValue={selectedDept}
        onChange={setSelectedDept}
        options={department}
        styles={customSelectBox}
        onClick={goLink()}
      />
    </BoxContainer>
  );
};

export default SelectBox;

const BoxContainer = styled.div`
  margin-top: 5.2rem;
  postion: relative;
  @media (max-width: ${media.mobileL}px) {
    display: none;
  }
`;
const CustomSelect = styled(Select)`
  z-index: 1;
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
