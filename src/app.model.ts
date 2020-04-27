export type BasicCountriesInfo = {
  flag: string;
  name: string;
  capital: string;
  region: string;
  population: number;
};

export type CountriesDetails = {
  nativeName: string;
  subRegion: string;
  topLevelDomain: string;
  currencies: string[];
  languages: string[];
  borderCountries: string[];
};

export type State = {
  isDarkThemeActive: boolean;
  countries: BasicCountriesInfo[];
  error: null | string;
  loading: boolean;
  nameFilter: string;
  regionFilter: string;
  toggleTheme: () => void;
  fetchCountries: () => void;
  setCountryFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setRegionFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
