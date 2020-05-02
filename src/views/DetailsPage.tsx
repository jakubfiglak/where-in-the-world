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

  const {
    name,
    flag,
    capital,
    region,
    population,
    nativeName,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = countryDetails;

  return (
    <MainTemplate>
      <DetailsTemplate
        key={name}
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
    </MainTemplate>
  );
};

export default DetailsPage;
