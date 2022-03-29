import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem 3.5rem 10rem 3.5rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 30px;
    color: ${(layoutColor) => layoutColor.theme.fontColor};
    padding-left: 30px;
  }

  img {
    max-width: 50%;
    object-fit: cover;
  }
`;
