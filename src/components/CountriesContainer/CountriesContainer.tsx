import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import CountryCard from '../CountryCard/CountryCard';
import { BasicCountriesInfo } from '../../app.model';
import { GlobalContext } from '../../context/GlobalState';

const StyledWrapper = styled.div`
  display: grid;
  gap: 4rem;
  padding: 3.2rem 5.5rem;
  position: relative;
`;

const CountriesContainer: React.FC = () => {
  const { countries, fetchCountries, nameFilter, regionFilter } = useContext(
    GlobalContext
  );

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <StyledWrapper>
      {countries
        .filter((country) => country.name.toLowerCase().includes(nameFilter))
        .filter((country) =>
          regionFilter ? country.region === regionFilter : country
        )
        .map((country: BasicCountriesInfo) => (
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
