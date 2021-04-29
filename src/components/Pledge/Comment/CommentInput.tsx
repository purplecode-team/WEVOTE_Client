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
        placeholder="후보자에게 질문을 자유롭게 남겨주세요. 비난이나 욕설은 삭제됩니다."
        onChange={handleInputChange}
      />
      <InputButton type="submit" value="등록" />
    </InputBlock>
  );
};

const InputBlock = styled.form`
  width: 100%;
  margin: 60px auto;
  text-align: center;
`;

const InputText = styled.input`
  height: 58px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid gray;
  border-style: none;
  font-size: 1.8rem;
  font-family: 'paybooc-bold', sans-serif;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
  @media (min-width: ${media.mobileL + 1}px) {
    width: 85%;
  }
  @media (max-width: ${media.mobileL}px) {
    width: 70%;
    min-width: 200px;
    font-size: 1.1rem;
  }
`;

const InputButton = styled.input`
  width: 138px;
  height: 58px;
  margin-left: 10px;
  background: ${theme.Blue};
  border-radius: 25px;
  border-style: none;
  color: white;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${media.mobileL}px) {
    width: 64px;
    font-size: 1.1rem;
    border-radius: 15px;
  }
`;

export default CommentInput;
