import React from 'react';
import { useLocation } from 'react-router';
import MainTemplate from '../templates/MainTemplate';
import DetailsTemplate from '../templates/DetailsTemplate';
import { BasicCountriesInfo } from '../app.model';

const DetailsView: React.FC = () => {
  const { state } = useLocation<BasicCountriesInfo>();
  const { name, flag, capital, population, region } = state;

  return (
    <MainTemplate>
      <DetailsTemplate
        name={name}
        flag={flag}
        capital={capital}
        region={region}
        population={population}
        nativeName="asdasda"
        subRegion="asdasd"
        topLevelDomain="asdasdad"
        currencies={['usd']}
        languages={['usd']}
        borderCountries={['France', 'Germany', 'Netherlands']}
      />
    </MainTemplate>
  );
};

export default DetailsView;
