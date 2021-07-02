import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';
import theme from '../../../lib/styles/theme';

const CommentInput = () => {
  const [text, setText] = useState('');
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <InputBlock>
      <InputText
        type="text"
        value={text}
        placeholder="공약에 대한 질문을 남겨주세요."
        onChange={handleInputChange}
      />
      <InputButton type="submit" value="등록" />
    </InputBlock>
  );
};

const InputBlock = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 60px auto;
`;

const InputText = styled.input`
  height: 50px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid gray;
  border-radius: 15px;
  border-style: none;
  font-size: 1.5rem;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
  @media (min-width: ${media.mobileL + 1}px) {
    width: 85%;
  }
  @media (max-width: ${media.mobileL}px) {
    width: 70%;
    min-width: 200px;
    font-size: 1.2rem;
  }
`;

const InputButton = styled.input`
  width: 100px;
  height: 50px;
  margin-left: 10px;
  background: ${theme.Blue};
  border-radius: 25px;
  border-style: none;
  color: white;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${media.mobileL}px) {
    width: 64px;
    font-size: 1.2rem;
    border-radius: 15px;
  }
`;

export default CommentInput;
