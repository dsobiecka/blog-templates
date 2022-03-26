import styled from 'styled-components';

export const Wrapper = styled.div`
  .icon {
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    position: relative;
    margin: 0.75rem;

    &:hover {
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;
