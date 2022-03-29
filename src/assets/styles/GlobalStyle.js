import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    background-color: ${(layoutColor) => layoutColor.theme.body};
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
  
  img {
    max-width: 100%;
    border-style: none;
  }
`;
