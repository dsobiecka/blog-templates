import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 2rem 3rem 2rem;
`;

export const BlogBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1299px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
