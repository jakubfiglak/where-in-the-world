import React from 'react';
import styled from 'styled-components';
import { FiMoon } from 'react-icons/fi';
import { TiWeatherSunny } from 'react-icons/ti';
import PropTypes from 'prop-types';

const StyledWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.elements};
  padding: 3rem 1.6rem;
`;

const StyledLogo = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
`;

const StyledLogoContainer = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.4;
`;

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s};
  background: 0;
  border: 0;
  width: 90px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

type HeaderProps = {
  onDarkThemeToggle: () => void;
  isDarkThemeActive: boolean;
};

const Header: React.FC<HeaderProps> = ({
  onDarkThemeToggle,
  isDarkThemeActive,
}) => (
  <StyledWrapper>
    <StyledLogoContainer>
      <StyledLogo href="#">Where in the world?</StyledLogo>
    </StyledLogoContainer>
    <StyledButton onClick={onDarkThemeToggle}>
      {isDarkThemeActive ? (
        <>
          <TiWeatherSunny />
          Light mode
        </>
      ) : (
        <>
          <FiMoon />
          Dark mode
        </>
      )}
    </StyledButton>
  </StyledWrapper>
);

Header.propTypes = {
  onDarkThemeToggle: PropTypes.func.isRequired,
  isDarkThemeActive: PropTypes.bool.isRequired,
};

export default Header;
