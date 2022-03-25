import styled from 'styled-components';

export const SwitchIcon = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    border-radius: 1.5rem;
    margin: 0;
    width: 30%;

    img {
      width: 30%;
      margin: 0;
      cursor: pointer;
    }
  }
`;
