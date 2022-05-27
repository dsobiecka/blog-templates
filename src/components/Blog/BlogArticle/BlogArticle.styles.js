import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem 3.5rem 10rem 3.5rem;

  @media (max-width: 840px) {
    padding: 0rem 2rem 6rem 2rem;
  }

  h2 {
    color: ${(layoutColor) => layoutColor.theme.fontColor};
  }

  h3 {
    color: ${(layoutColor) => layoutColor.theme.fontColor};
  }

  p {
    color: ${(layoutColor) => layoutColor.theme.fontColor};
  }
`;
