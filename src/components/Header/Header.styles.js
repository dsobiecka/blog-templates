import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 2rem;
  background-color: ${(layoutColor) => layoutColor.theme.body};
`;
