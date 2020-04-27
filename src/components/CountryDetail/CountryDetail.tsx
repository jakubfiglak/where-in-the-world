import styled from 'styled-components';

const StyledDetail = styled.li`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 1.15;
  margin: 0;

  span {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;

export default StyledDetail;
