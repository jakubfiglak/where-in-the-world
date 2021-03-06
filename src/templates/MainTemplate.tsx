import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { lightTheme, darkTheme } from '../theme/theme';
import { GlobalContext } from '../context/GlobalState';
import { GlobalStyle } from '../theme/GlobalStyle';
import Header from '../components/Header/Header';

const MainTemplate: React.FC = ({ children }) => {
  const { isDarkThemeActive } = useContext(GlobalContext);

  return (
    <>
      <ThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
