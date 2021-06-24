import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'paybooc';
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  * {
    -webkit-tap-highlight-color: inherit;
  }
`;

export default GlobalStyle;
