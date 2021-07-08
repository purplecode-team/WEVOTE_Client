import React, { useEffect, useState } from 'react';

import defaultImg from '../../../../public/img/noimg.jpg';
import styled from 'styled-components';

export default function CalenderPreview (props) {
  const { fileUrl, alt, resetImg } = props;
  const [url, setUrl] = useState(fileUrl);

  const isDefault = url === defaultImg;

  const handleImgError = () => {
    setUrl(defaultImg);
  };

  useEffect(() => {
    setUrl(fileUrl);
  }, [fileUrl]);

  return (
    <Box>
      <Img src={url} alt={alt} onError={handleImgError} />
      {!isDefault && (
        <Button type='button' onClick={resetImg}>
          X
        </Button>
      )}
    </Box>
  );
}

const Box = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Img = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const Button = styled.button`
  border-style: none;
  background: none;
  width: 20px;
  height: 20px;
  color: gray;
  font-size: 2.5rem;
  position: absolute;
  z-index: 1;
  top: 15px;
  right: 25px;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
