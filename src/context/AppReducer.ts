import { State, BasicCountriesInfo, CountriesDetails } from '../app.model';

type Action =
  | { type: 'SWITCH_THEME' }
  | { type: 'GET_COUNTRIES'; payload: BasicCountriesInfo[] }
  | { type: 'SET_COUNTRY_FILTER'; payload: string }
  | { type: 'SET_REGION_FILTER'; payload: string }
  | { type: 'GET_COUNTRY_DETAILS'; payload: CountriesDetails[] }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_LOADING' }
  | { type: 'SET_LOCAL_THEME'; payload: boolean };

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };

    case 'GET_COUNTRY_DETAILS':
      return {
        ...state,
        countryDetails: action.payload,
        loading: false,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'SWITCH_THEME':
      return {
        ...state,
        isDarkThemeActive: !state.isDarkThemeActive,
      };

    case 'SET_LOCAL_THEME':
      return {
        ...state,
        isDarkThemeActive: action.payload,
      };

    case 'SET_COUNTRY_FILTER':
      return {
        ...state,
        nameFilter: action.payload,
      };

    case 'SET_REGION_FILTER':
      return {
        ...state,
        regionFilter: action.payload,
      };

    default:
      return state;
  }
};
