import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import InputContainer from '../components/InputContainer/InputContainer';
import CountriesContainer from '../components/CountriesContainer/CountriesContainer';

const StyledWrapper = styled.main`
  padding: 0 1.6rem;

  @media screen and (min-width: 1024px) {
    padding: 0 8rem;
  }
`;

const Root: React.FC = () => {
  return (
    <MainTemplate>
      <StyledWrapper>
        <InputContainer />
        <CountriesContainer />
      </StyledWrapper>
    </MainTemplate>
  );
};

export default Root;
