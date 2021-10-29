import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  :root {
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: #ccc;
  }
`;

export default GlobalStyle;
