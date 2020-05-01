import React, { useContext } from 'react';
import styled from 'styled-components';
import CountryCard from '../CountryCard/CountryCard';
import { BasicCountriesInfo } from '../../app.model';
import { GlobalContext } from '../../context/GlobalState';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 264px);
  justify-content: center;
  gap: 4rem;
  padding: 3.2rem 0;
  position: relative;
`;

const CountriesContainer: React.FC = () => {
  const { countries, nameFilter, regionFilter, loading, error } = useContext(
    GlobalContext
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage>Ups, something went wrong - {error}</ErrorMessage>;
  }

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
            alpha3Code={country.alpha3Code}
          />
        ))}
    </StyledWrapper>
  );
};

export default CountriesContainer;
