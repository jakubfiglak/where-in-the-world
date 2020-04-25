import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { lightTheme } from './theme/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <h1>hello</h1>
        <div />
      </ThemeProvider>
    </div>
  );
}

export default App;
