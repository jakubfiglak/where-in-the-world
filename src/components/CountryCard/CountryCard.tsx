import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.elements};
  border-radius: 5px;
  display: grid;
  gap: 2.4rem;
  padding-block-end: 4.6rem;
`;

const StyledFlag = styled.img`
  width: 264px;
  height: 160px;
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

const StyledDetailsContainer = styled.div`
  display: grid;
  gap: 0.8rem;
`;

const StyledDetail = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 1.15;
  margin: 0;

  span {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;

const CountryCard: React.FC = () => (
  <StyledWrapper>
    <StyledFlag src="https://restcountries.eu/data/afg.svg" alt="" />
    <StyledInfoContainer>
      <StyledName>Afghanistan</StyledName>
      <StyledDetailsContainer>
        <StyledDetail>
          <span>Population:</span> 123456789
        </StyledDetail>
        <StyledDetail>
          <span>Region:</span> Asia
        </StyledDetail>
        <StyledDetail>
          <span>Capital:</span> Kabul
        </StyledDetail>
      </StyledDetailsContainer>
    </StyledInfoContainer>
  </StyledWrapper>
);

export default CountryCard;
