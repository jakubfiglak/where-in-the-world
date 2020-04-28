import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { CountriesDetails } from '../app.model';
import DetailsContainer from '../components/DetailsContainer/DetailsContainer';
import StyledDetail from '../components/CountryDetail/CountryDetail';
import { GlobalContext } from '../context/GlobalState';

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
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.1);
  }
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
  flex-wrap: wrap;
`;

const StyledCountryLink = styled(Link)`
  background: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  padding: 0.6rem 3rem;
  margin: 0 1rem 1rem 0;
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.1);
  }
`;

const DetailsTemplate: React.FC<CountriesDetails> = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  const { countries } = useContext(GlobalContext);
  // console.log(countries);
  // console.log(borders);

  // Convert border countries alpha3codes to full names

  const borderCountries = borders.map((border) => {
    const searchedCountry = countries.find(
      (country) => country.alpha3Code === border
    );
    return searchedCountry?.name;
  });

  return (
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
          {new Intl.NumberFormat('en-US').format(population)}
        </StyledDetail>
        <StyledDetail>
          <span>Region: </span>
          {region}
        </StyledDetail>
        <StyledDetail>
          <span>Sub Region: </span>
          {subregion}
        </StyledDetail>
        <StyledDetail>
          <span>Capital: </span>
          {capital}
        </StyledDetail>
      </StyledDetailsContainer>
      <StyledDetailsContainer>
        <StyledDetail>
          <span>Top Level Domain: </span>
          {topLevelDomain.join(', ')}
        </StyledDetail>
        <StyledDetail>
          <span>Currencies: </span>
          {currencies.map((currency) => currency.name).join(', ')}
        </StyledDetail>
        <StyledDetail>
          <span>Languages: </span>
          {languages.map((language) => language.name).join(', ')}
        </StyledDetail>
      </StyledDetailsContainer>
      <StyledBorderSection>
        <StyledHeading>Border Countries:</StyledHeading>
        <StyledLinksContainer>
          {borderCountries.map((country) => {
            return (
              <StyledCountryLink key={country} to={`/countries/${country}`}>
                {country}
              </StyledCountryLink>
            );
          })}
        </StyledLinksContainer>
      </StyledBorderSection>
    </StyledWrapper>
  );
};

export default DetailsTemplate;
