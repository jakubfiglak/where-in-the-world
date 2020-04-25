import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth; 
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    transition: all 0.3s;
  }
`;
