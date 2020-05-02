import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { CountriesDetails } from '../types/app.model';
import DetailsContainer from '../components/DetailsContainer/DetailsContainer';
import StyledDetail from '../components/CountryDetail/CountryDetail';
import { GlobalContext } from '../context/GlobalState';

const StyledWrapper = styled.article`
  padding: 4rem 2.8rem;
  margin: 7.9rem auto 0 auto;
  max-width: 1440px;

  @media screen and (min-width: 768px) {
    padding: 8rem;
  }
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

const StyledContent = styled.div`
  display: grid;
  gap: 1.6rem;
  margin-block-start: 4.8rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10rem;
  }
`;

const StyledFlag = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const StyledName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.4;
`;

const StyledDetailsWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
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

  return (
    <StyledWrapper>
      <StyledLink to="/">
        <FaLongArrowAltLeft />
        Back
      </StyledLink>
      <StyledContent>
        <StyledFlag src={flag} alt="" />
        <div>
          <StyledName>{name}</StyledName>
          <StyledDetailsWrapper>
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
          </StyledDetailsWrapper>
          <StyledBorderSection>
            <StyledHeading>Border Countries:</StyledHeading>
            <StyledLinksContainer>
              {borders.map((country) => {
                const countryData = countries.find(
                  (item) => item.alpha3Code === country
                )!;
                return (
                  <StyledCountryLink key={country} to={`/countries/${country}`}>
                    {countryData.name}
                  </StyledCountryLink>
                );
              })}
            </StyledLinksContainer>
          </StyledBorderSection>
        </div>
      </StyledContent>
    </StyledWrapper>
  );
};

DetailsTemplate.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  topLevelDomain: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      iso639_1: PropTypes.string.isRequired,
      iso639_2: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      nativeName: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  borders: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default DetailsTemplate;
