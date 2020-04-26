import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';
import Header from '../components/Header/Header';
import InputContainer from '../components/InputContainer/InputContainer';
import CountriesContainer from '../components/CountriesContainer/CountriesContainer';
import { GlobalContext } from '../context/GlobalState';
import { GlobalStyle } from '../theme/GlobalStyle';

const MainView = () => {
  const { isDarkThemeActive } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <InputContainer />
      <CountriesContainer />
    </ThemeProvider>
  );
};

export default MainView;
