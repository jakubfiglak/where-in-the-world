import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router';
import Loader from '../components/Loader/Loader';
import MainTemplate from '../templates/MainTemplate';
import DetailsTemplate from '../templates/DetailsTemplate';
import { GlobalContext } from '../context/GlobalState';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const DetailsPage: React.FC = () => {
  const { pathname } = useLocation();
  const pathArr = pathname.split('/');
  const countryCode = pathArr[pathArr.length - 1];

  const { error, loading, countryDetails, fetchCountryDetails } = useContext(
    GlobalContext
  );

  useEffect(() => {
    fetchCountryDetails(countryCode);
  }, [countryCode]);

  if (loading) {
    return (
      <MainTemplate>
        <Loader />
      </MainTemplate>
    );
  }
  if (error) {
    return (
      <MainTemplate>
        <ErrorMessage>Ups, something went wrong - {error}</ErrorMessage>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <DetailsTemplate
        key={countryDetails.name}
        name={countryDetails.name}
        flag={countryDetails.flag}
        capital={countryDetails.capital}
        region={countryDetails.region}
        population={countryDetails.population}
        nativeName={countryDetails.nativeName}
        subregion={countryDetails.subregion}
        topLevelDomain={countryDetails.topLevelDomain}
        currencies={countryDetails.currencies}
        languages={countryDetails.languages}
        borders={countryDetails.borders}
      />
    </MainTemplate>
  );
};

export default DetailsPage;
