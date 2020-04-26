import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CountryCard from '../CountryCard/CountryCard';
import { BasicCountriesInfo } from '../../app.model';

const apiUrl =
  'https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag';

const StyledWrapper = styled.div`
  display: grid;
  gap: 4rem;
  padding: 3.2rem 5.5rem;
`;

const CountriesContainer: React.FC = () => {
  const [countries, setCountries] = useState<BasicCountriesInfo[]>([]);

  useEffect(() => {
    const fetchCountries = async (url: string) => {
      const res = await fetch(url);
      const data = await res.json();
      localStorage.setItem('countries', JSON.stringify(data));
      setCountries(data);
    };

    const localCountries = localStorage.getItem('countries');

    if (localCountries) {
      const localData = JSON.parse(localCountries);
      setCountries(localData);
    } else {
      fetchCountries(apiUrl);
    }
  }, []);

  return (
    <StyledWrapper>
      {countries.map((country: BasicCountriesInfo) => (
        <CountryCard
          key={country.name}
          name={country.name}
          flag={country.flag}
          region={country.region}
          population={country.population}
          capital={country.capital}
        />
      ))}
    </StyledWrapper>
  );
};

export default CountriesContainer;
