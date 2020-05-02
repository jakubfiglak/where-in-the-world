import React, { useContext } from 'react';
import styled from 'styled-components';
import CountryCard from '../CountryCard/CountryCard';
import { BasicCountriesInfo } from '../../types/app.model';
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
        .filter(
          (country) =>
            country.region.includes(regionFilter) &&
            country.name.toLowerCase().includes(nameFilter)
        )
        .map((country: BasicCountriesInfo) => {
          const {
            name,
            flag,
            region,
            population,
            capital,
            alpha3Code,
          } = country;

          return (
            <CountryCard
              key={name}
              name={name}
              flag={flag}
              region={region}
              population={population}
              capital={capital}
              alpha3Code={alpha3Code}
            />
          );
        })}
    </StyledWrapper>
  );
};

export default CountriesContainer;
