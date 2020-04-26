import React, { createContext, useReducer, ReactNode } from 'react';
import AppReducer from './AppReducer';
import { State } from '../app.model';

type Props = {
  children: ReactNode;
};

const initialState: State = {
  isDarkThemeActive: false,
  countries: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const StateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' });
  };

  return (
    <GlobalContext.Provider
      value={{
        isDarkThemeActive: state.isDarkThemeActive,
        countries: state.countries,
        error: state.error,
        loading: state.loading,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
