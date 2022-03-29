import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px solid ${(layoutColor) => layoutColor.theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
`;
