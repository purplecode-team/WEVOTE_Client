import { createGlobalStyle } from 'styled-components';
import media from '@styles/media';
import reset from 'styled-reset';
import theme from '@styles/theme';

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
    background-color: ${theme.BackgroundWhite};
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3.5px;
      background-color: #ced4da;
      &:hover {
        background-color: #adb5bd;
      }
    }
    @media (max-width: ${media.mobileL}px) {
      &::-webkit-scrollbar {
        display:none;
      }
      &::-webkit-scrollbar-thumb {
        display:none;
      }
    }
  }
  .modal-small {
    max-width: 800px;
    width: 100%;
  }
  
  .modal-large {
    max-width:1000px;
    width: 100%;
  }

  * {
    -webkit-tap-highlight-color: inherit;
  }
`;

export default GlobalStyle;
