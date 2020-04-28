import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import MainTemplate from '../templates/MainTemplate';
import DetailsTemplate from '../templates/DetailsTemplate';
import { CountriesDetails } from '../app.model';

const DetailsPage: React.FC = () => {
  const { pathname } = useLocation();
  const pathArr = pathname.split('/');
  const countryName = pathArr[pathArr.length - 1];

  const initialState: CountriesDetails[] = [
    {
      flag: '',
      name: '',
      capital: '',
      region: '',
      population: 0,
      nativeName: '',
      subregion: '',
      topLevelDomain: [],
      currencies: [],
      languages: [],
      borders: [],
    },
  ];

  // is there a better way to avoid error with countriesDetails[0]
  // being undefined before the state is settled than setting this whole initial state?

  const [countryDetails, setCountryDetails] = useState<CountriesDetails[]>(
    initialState
  );
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountriesDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.eu/rest/v2/name/${countryName}?fields=name;capital;population;flag;region;nativeName;subregion;topLevelDomain;currencies;languages;borders`
        );
        const data = await res.json();
        setLoading(false);
        setCountryDetails(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchCountriesDetails();
  }, [countryName]);

  const {
    borders,
    capital,
    currencies,
    flag,
    languages,
    name,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
  } = countryDetails[0];

  return (
    <MainTemplate>
      {loading ? (
        <p>loading...</p>
      ) : (
        <DetailsTemplate
          name={name}
          flag={flag}
          capital={capital}
          region={region}
          population={population}
          nativeName={nativeName}
          subregion={subregion}
          topLevelDomain={topLevelDomain}
          currencies={currencies}
          languages={languages}
          borders={borders}
        />
      )}
    </MainTemplate>
  );
};

export default DetailsPage;
