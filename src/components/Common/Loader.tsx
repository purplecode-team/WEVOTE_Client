import * as React from 'react';

import { css } from '@emotion/react';
import RingLoader from 'react-spinners/RingLoader';
import theme from '../../lib/styles/theme';

type loaderType = {
  size?: number;
};

const color = theme.Blue;
function Loader(props: loaderType) {
  const { size } = props;
  return (
    <div>
      <RingLoader color={color} css={override} size={size} />
    </div>
  );
}

Loader.defaultProps = {
  size: 50,
};

const override = css`
  display: block;
  margin: 50px auto;
  border-color: ${theme.Blue};
`;

export default Loader;
