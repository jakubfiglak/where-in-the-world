import { State, BasicCountriesInfo } from '../app.model';

type Action =
  | { type: 'SWITCH_THEME' }
  | { type: 'GET_COUNTRIES'; payload: BasicCountriesInfo[] }
  | { type: 'SET_COUNTRY_FILTER'; payload: string }
  | { type: 'SET_REGION_FILTER'; payload: string };

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };

    case 'SWITCH_THEME':
      return {
        ...state,
        isDarkThemeActive: !state.isDarkThemeActive,
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
