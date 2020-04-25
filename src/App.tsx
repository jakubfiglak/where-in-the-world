import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { lightTheme, darkTheme } from './theme/theme';
import Header from './components/Header/Header';
import InputContainer from './components/InputContainer/InputContainer';

const App: React.FC = () => {
  const [isDarkThemeActive, setDarkTheme] = useState(false);

  const toggleDarkTheme = (): void => {
    setDarkTheme(!isDarkThemeActive);
  };

  return (
    <div className="App">
      <ThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header
          onDarkThemeToggle={toggleDarkTheme}
          isDarkThemeActive={isDarkThemeActive}
        />
        <InputContainer />
      </ThemeProvider>
    </div>
  );
};

export default App;
