import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GlobalContext } from '../../context/GlobalState';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.4rem 1.6rem;
`;

const StyledInputContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.elements};
  border-radius: 5px;
  margin-block-end: 4rem;
`;

const StyledSearchInput = styled.input`
  background: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.inputText};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fontFamily};
  line-height: 1.67;
  padding: 1.4rem 7.4rem;
  width: 100%;
  border: 0;
  border-radius: 5px;
`;

const StyledSearchIcon = styled(MdSearch)`
  position: absolute;
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.inputText};
`;

const StyledSelect = styled.select`
  background: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.67;
  padding: 1.4rem 2.4rem;
  width: 200px;
  border: 0;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const InputContainer: React.FC = () => {
  const { nameFilter, setCountryFilter, setRegionFilter } = useContext(
    GlobalContext
  );

  return (
    <StyledWrapper>
      <StyledInputContainer>
        <StyledSearchIcon />
        <StyledSearchInput
          placeholder="Search for a country..."
          value={nameFilter}
          onChange={setCountryFilter}
        />
      </StyledInputContainer>
      <StyledSelect onChange={setRegionFilter}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </StyledSelect>
    </StyledWrapper>
  );
};

export default InputContainer;
