import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    fontWeight: {
      light: number;
      normal: number;
      bold: number;
    };
    fontSize: {
      xl: string;
      l: string;
      m: string;
      s: string;
    };
    colors: {
      elements: string;
      background: string;
      text: string;
      inputText: string;
    };
  }
}
