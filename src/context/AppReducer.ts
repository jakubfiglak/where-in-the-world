import { State } from '../app.model';

type Action = { type: 'TEST'; payload: string } | { type: 'SWITCH_THEME' };

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        loading: false,
      };

    case 'SWITCH_THEME':
      return {
        ...state,
        isDarkThemeActive: !state.isDarkThemeActive,
      };

    default:
      return state;
  }
};
