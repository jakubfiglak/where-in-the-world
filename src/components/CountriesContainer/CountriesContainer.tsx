import React from 'react';
import styled from 'styled-components';
import CountryCard from '../CountryCard/CountryCard';

const StyledWrapper = styled.div`
  display: grid;
  gap: 4rem;
  padding: 3.2rem 5.5rem;
`;

const CountriesContainer: React.FC = () => (
  <StyledWrapper>
    <CountryCard />
    <CountryCard />
    <CountryCard />
  </StyledWrapper>
);

export default CountriesContainer;
