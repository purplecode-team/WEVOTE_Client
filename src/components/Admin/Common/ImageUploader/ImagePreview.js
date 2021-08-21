import React, { useEffect, useState } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import defaultImg from '../../../../../public/img/noimg.jpg';
import styled from 'styled-components';

export default function ImagePreview (props) {
  const { fileUrl, alt, resetImg, width, height } = props;
  const [urls, setUrls] = useState([]);

  const isDefault = urls[0] === defaultImg;
  const hasUrlArray = urls.length > 0;

  const handleImgError = () => {
    setUrls([defaultImg]);
  };

  const MaxFileSize = 9;

  useEffect(() => {
    if (isDefault) setUrls([defaultImg]);
  }, []);

  useEffect(() => {
    const isFileArray = Array.isArray(fileUrl);
    if (!isFileArray) {
      setUrls([fileUrl]);
      return;
    }
    // 이미지 최대 9개
    let temp = [];
    for (let i = 0; i < fileUrl.length; i++) {
      if (i >= MaxFileSize) break;
      temp.push(fileUrl[i]);
    }
    setUrls(temp);
  }, [fileUrl]);

  return (
    <Box>
      {hasUrlArray &&
        urls.map((url, index) => (
          <ImageBlock key={index}>
            <Img
              src={url}
              alt={alt}
              style={{ width: width, height: height }}
              onError={handleImgError}
            />
            ;
            <Button type='button' onClick={resetImg}>
              <CloseIcon />
            </Button>
          </ImageBlock>
        ))}
    </Box>
  );
}

const Box = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ImageBlock = styled.div`
  position: relative;
`;

const Img = styled.img`
  /* width: 350px;
  height: 400px; */
  margin: 20px 0;
  border-radius: 20px;
  border: 1px solid #eee;
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
  top: 25px;
  right: 20px;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
