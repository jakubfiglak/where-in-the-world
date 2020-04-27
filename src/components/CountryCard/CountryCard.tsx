import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import slug from 'slug';
import { BasicCountriesInfo } from '../../app.model';
import StyledDetail from '../CountryDetail/CountryDetail';
import StyledDetailsContainer from '../DetailsContainer/DetailsContainer';

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.elements};
  border-radius: 5px;
  display: grid;
  gap: 2.4rem;
  padding-block-end: 4.6rem;
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
}) => {
  const [redirect, setRedirect] = useState(false);

  const handleCardClick = (): void => {
    setRedirect(true);
  };

  const altText = `${name} flag`;
  const sluggedName = slug(name, { lower: true });

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: `countries/${sluggedName}`,
          state: {
            flag,
            name,
            capital,
            region,
            population,
          },
        }}
      />
    );
  }

  return (
    <StyledWrapper onClick={handleCardClick}>
      <StyledFlag src={flag} alt={altText} />
      <StyledInfoContainer>
        <StyledName>{name}</StyledName>
        <StyledDetailsContainer>
          <StyledDetail>
            <span>Population:</span> {population}
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
};

export default CountryCard;
