import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router';
import Loader from '../components/Loader/Loader';
import MainTemplate from '../templates/MainTemplate';
import DetailsTemplate from '../templates/DetailsTemplate';
import { CountriesDetails } from '../app.model';
import { GlobalContext } from '../context/GlobalState';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const DetailsPage: React.FC = () => {
  const { pathname } = useLocation();
  const pathArr = pathname.split('/');
  const countryName = pathArr[pathArr.length - 1];

  const { error, loading, countryDetails, fetchCountryDetails } = useContext(
    GlobalContext
  );

  useEffect(() => {
    fetchCountryDetails(countryName);
  }, [countryName]);

  return (
    <MainTemplate>
      {loading && <Loader />}{' '}
      {error && (
        <ErrorMessage>Ups, something went wrong - {error}</ErrorMessage>
      )}{' '}
      {!loading &&
        !error &&
        countryDetails
          .filter((country) => country.name === countryName)
          .map((country: CountriesDetails) => (
            <DetailsTemplate
              key={country.name}
              name={country.name}
              flag={country.flag}
              capital={country.capital}
              region={country.region}
              population={country.population}
              nativeName={country.nativeName}
              subregion={country.subregion}
              topLevelDomain={country.topLevelDomain}
              currencies={country.currencies}
              languages={country.languages}
              borders={country.borders}
            />
          ))}
    </MainTemplate>
  );
};

export default DetailsPage;
