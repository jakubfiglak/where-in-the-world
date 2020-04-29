import React from 'react';
import styled from 'styled-components';
import RingLoader from 'react-spinners/RingLoader';

const StyledContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader: React.FC = () => (
  <StyledContainer>
    <RingLoader />
  </StyledContainer>
);

export default Loader;
