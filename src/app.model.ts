export type BasicCountriesInfo = {
  flag: string;
  name: string;
  capital: string;
  region: string;
  population: number;
};

export type State = {
  isDarkThemeActive: boolean;
  countries: BasicCountriesInfo[];
  error: null | string;
  loading: boolean;
  toggleTheme?: () => void;
};
