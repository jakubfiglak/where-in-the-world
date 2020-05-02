import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BasicCountriesInfo } from '../../types/app.model';
import StyledDetail from '../CountryDetail/CountryDetail';
import StyledDetailsContainer from '../DetailsContainer/DetailsContainer';

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.elements};
  border-radius: 5px;
  display: grid;
  gap: 2.4rem;
  padding-block-end: 4.6rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: transform 0.15s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledFlag = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const StyledInfoContainer = styled.div`
  display: grid;
  gap: 1.6rem;
  padding: 0 2.4rem;
`;

const StyledName = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.44;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
`;

const CountryCard: React.FC<BasicCountriesInfo> = ({
  flag,
  name,
  capital,
  region,
  population,
  alpha3Code,
}) => {
  const altText = `${name} flag`;

  return (
    <StyledWrapper as={Link} to={`/countries/${alpha3Code}`}>
      <StyledFlag src={flag} alt={altText} />
      <StyledInfoContainer>
        <StyledName>{name}</StyledName>
        <StyledDetailsContainer>
          <StyledDetail>
            <span>Population:</span>{' '}
            {new Intl.NumberFormat('en-US').format(population)}
          </StyledDetail>
          <StyledDetail>
            <span>Region:</span> {region}
          </StyledDetail>
          <StyledDetail>
            <span>Capital:</span> {capital}
          </StyledDetail>
        </StyledDetailsContainer>
      </StyledInfoContainer>
    </StyledWrapper>
  );
};

CountryCard.propTypes = {
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  alpha3Code: PropTypes.string.isRequired,
};

export default CountryCard;
