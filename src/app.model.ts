export type BasicCountriesInfo = {
  flag: string;
  name: string;
  capital: string;
  region: string;
  population: number;
  alpha3Code?: string;
};

export type CountriesDetails = {
  flag: string;
  name: string;
  capital: string;
  region: string;
  population: number;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  borders: string[];
};

export type State = {
  isDarkThemeActive: boolean;
  countries: BasicCountriesInfo[];
  error: null | string;
  loading: boolean;
  nameFilter: string;
  regionFilter: string;
  countryDetails: CountriesDetails[];
  toggleTheme: () => void;
  fetchCountries: () => void;
  setCountryFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setRegionFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  fetchCountryDetails: (countryName: string) => void;
};
