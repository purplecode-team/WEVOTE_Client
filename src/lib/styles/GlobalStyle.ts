import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html{
    font-size: 62.5%;
  }
  body{
    width: 100vw;
    overflow-x: hidden;
    font-family: 'paybooc';
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: #ced4da;

    &:hover {
      background-color: #adb5bd;
    }
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  }
  * {
    -webkit-tap-highlight-color: inherit;
  }
`;

export default GlobalStyle;
