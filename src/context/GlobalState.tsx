import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppReducer from './AppReducer';
import { State } from '../app.model';

const initialState: State = {
  isDarkThemeActive: false,
  countries: [],
  error: null,
  loading: false,
  nameFilter: '',
  regionFilter: '',
  countryDetails: [],
  toggleTheme: () => null,
  fetchCountries: () => null,
  setCountryFilter: () => null,
  setRegionFilter: () => null,
  fetchCountryDetails: () => null,
};

export const GlobalContext = createContext(initialState);

export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' });
  };

  const fetchCountries = async () => {
    dispatch({
      type: 'SET_LOADING',
    });
    let data = [];
    const localCountries = localStorage.getItem('countries');

    if (localCountries) {
      data = JSON.parse(localCountries);
    } else {
      try {
        const res = await fetch(
          'https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag;alpha3Code'
        );
        data = await res.json();
        localStorage.setItem('countries', JSON.stringify(data));
      } catch (err) {
        dispatch({
          type: 'SET_ERROR',
          payload: err.message,
        });
      }
    }
    dispatch({
      type: 'GET_COUNTRIES',
      payload: data,
    });
  };

  const fetchCountryDetails = async (countryName: string) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${countryName}?fields=name;capital;population;flag;region;nativeName;subregion;topLevelDomain;currencies;languages;borders`
      );
      const data = await res.json();
      dispatch({
        type: 'GET_COUNTRY_DETAILS',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err.message,
      });
    }
  };

  const setCountryFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_COUNTRY_FILTER',
      payload: e.target.value,
    });
  };

  const setRegionFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'SET_REGION_FILTER',
      payload: e.target.value,
    });
  };

  useEffect(() => {
    fetchCountries();

    const localTheme = localStorage.getItem('isDarkThemeActive');
    if (localTheme) {
      dispatch({
        type: 'SET_LOCAL_THEME',
        payload: JSON.parse(localTheme),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'isDarkThemeActive',
      JSON.stringify(state.isDarkThemeActive)
    );
  }, [state.isDarkThemeActive]);

  return (
    <GlobalContext.Provider
      value={{
        isDarkThemeActive: state.isDarkThemeActive,
        countries: state.countries,
        error: state.error,
        loading: state.loading,
        nameFilter: state.nameFilter,
        regionFilter: state.regionFilter,
        countryDetails: state.countryDetails,
        toggleTheme,
        fetchCountries,
        setCountryFilter,
        setRegionFilter,
        fetchCountryDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
