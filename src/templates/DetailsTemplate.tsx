import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import slug from 'slug';
import { BasicCountriesInfo, CountriesDetails } from '../app.model';
import DetailsContainer from '../components/DetailsContainer/DetailsContainer';
import StyledDetail from '../components/CountryDetail/CountryDetail';

const StyledWrapper = styled.article`
  padding: 4rem 2.8rem;
  display: grid;
  gap: 1.6rem;
`;

const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  display: flex;
  width: 104px;
  padding: 0.6rem 2.4rem;
  justify-content: space-between;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 2px;
`;

const StyledFlag = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-block-start: 4.8rem;
`;

const StyledName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.4;
`;

const StyledDetailsContainer = styled(DetailsContainer)`
  margin-block-end: 1.6rem;
`;

const StyledBorderSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled.h2`
  font-size: 1.6rem;
  line-height: 1.5;
`;

const StyledLinksContainer = styled.div`
  display: flex;
`;

const StyledCountryLink = styled(Link)`
  background: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  padding: 0.6rem 3rem;
  margin-inline-end: 1rem;
`;

const DetailsTemplate: React.FC<BasicCountriesInfo & CountriesDetails> = ({
  name,
  flag,
  capital,
  region,
  population,
  nativeName,
  subRegion,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}) => (
  <StyledWrapper>
    <StyledLink to="/">
      <FaLongArrowAltLeft />
      Back
    </StyledLink>
    <StyledFlag src={flag} alt="" />
    <StyledName>{name}</StyledName>
    <StyledDetailsContainer>
      <StyledDetail>
        <span>Native Name: </span>
        {nativeName}
      </StyledDetail>
      <StyledDetail>
        <span>Population: </span>
        {population}
      </StyledDetail>
      <StyledDetail>
        <span>Region: </span>
        {region}
      </StyledDetail>
      <StyledDetail>
        <span>Sub Region: </span>
        {subRegion}
      </StyledDetail>
      <StyledDetail>
        <span>Capital: </span>
        {capital}
      </StyledDetail>
    </StyledDetailsContainer>
    <StyledDetailsContainer>
      <StyledDetail>
        <span>Top Level Domain: </span>
        {topLevelDomain}
      </StyledDetail>
      <StyledDetail>
        <span>Currencies: </span>
        {currencies.join(', ')}
      </StyledDetail>
      <StyledDetail>
        <span>Languages: </span>
        {languages.join(', ')}
      </StyledDetail>
    </StyledDetailsContainer>
    <StyledBorderSection>
      <StyledHeading>Border Countries:</StyledHeading>
      <StyledLinksContainer>
        {borderCountries.map((country) => {
          const sluggedName = slug(country, { lower: true });
          return (
            <StyledCountryLink key={country} to={`/countries/${sluggedName}`}>
              {country}
            </StyledCountryLink>
          );
        })}
      </StyledLinksContainer>
    </StyledBorderSection>
  </StyledWrapper>
);

export default DetailsTemplate;
