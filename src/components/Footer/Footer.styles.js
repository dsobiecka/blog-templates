import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
`;
