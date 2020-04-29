import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { State } from '../app.model';

const initialState: State = {
  isDarkThemeActive: false,
  countries: [],
  error: null,
  loading: true,
  nameFilter: '',
  regionFilter: '',
  toggleTheme: () => null,
  fetchCountries: () => null,
  setCountryFilter: () => null,
  setRegionFilter: () => null,
};

export const GlobalContext = createContext(initialState);

export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' });
  };

  const fetchCountries = async () => {
    let data = [];
    const localCountries = localStorage.getItem('countries');

    if (localCountries) {
      data = JSON.parse(localCountries);
    } else {
      const res = await fetch(
        'https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag;alpha3Code'
      );
      data = await res.json();
      localStorage.setItem('countries', JSON.stringify(data));
    }
    dispatch({
      type: 'GET_COUNTRIES',
      payload: data,
    });
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

  // is it a good practice to use useEffect in ContextProvider component? I tried this approach because I want my countries array to be set to proper values when I refresh the details page (before I was fetching data only on CountriesContainer mount and when I refreshed the DetailsPage, border countries section was broken beacuse I compared it to countries array from global context)

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isDarkThemeActive: state.isDarkThemeActive,
        countries: state.countries,
        error: state.error,
        loading: state.loading,
        nameFilter: state.nameFilter,
        regionFilter: state.regionFilter,
        toggleTheme,
        fetchCountries,
        setCountryFilter,
        setRegionFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
