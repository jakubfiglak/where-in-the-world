import React from 'react';
import { FaSadCry } from 'react-icons/fa';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledIcon = styled(FaSadCry)`
  font-size: 3rem;
`;

const StyledMessage = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const ErrorMessage: React.FC = ({ children }) => (
  <StyledWrapper>
    <StyledIcon />
    <StyledMessage>{children}</StyledMessage>
  </StyledWrapper>
);

export default ErrorMessage;
