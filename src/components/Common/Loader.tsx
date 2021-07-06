import * as React from 'react';

import { css } from '@emotion/react';
import RingLoader from 'react-spinners/RingLoader';
import styled from 'styled-components';
import theme from '../../lib/styles/theme';

type loaderType = {
  size?: number;
};

const color = theme.Blue;
const loadingMessage = 'loading...';

function Loader(props: loaderType) {
  const { size } = props;
  return (
    <div>
      <RingLoader color={color} css={override} size={size} />
      {/* <Message>{loadingMessage}</Message>  */}
    </div>
  );
}

Loader.defaultProps = {
  size: 50,
};

const override = css`
  display: block;
  margin: 50px auto 10px;
  border-color: ${theme.Blue};
`;

const Message = styled.h2`
  font-size: 1.5rem;
  color: ${theme.Blue};
  text-align: center;
`;

export default Loader;
