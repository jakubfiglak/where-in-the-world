import { DefaultTheme } from 'styled-components';

const sharedTheme = {
  fontFamily: "'Nunito Sans', sans-serif",
  fontWeight: {
    light: 300,
    normal: 600,
    bold: 800,
  },
  fontSize: {
    xl: '2.4rem',
    l: '1.8rem',
    m: '1.4rem',
    s: '1.2rem',
  },
};

export const lightTheme: DefaultTheme = {
  ...sharedTheme,
  colors: {
    elements: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
    inputText: 'hsl(0, 0%, 52%)',
  },
};

export const darkTheme: DefaultTheme = {
  ...sharedTheme,
  colors: {
    elements: 'hsl(209, 23%, 22%)',
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    inputText: 'hsl(0, 0%, 100%)',
  },
};
