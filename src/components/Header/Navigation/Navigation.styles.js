import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 1.25rem;
  z-index: 101;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  transition: all 0.2s cubic-bezier(0.76, 0, 0.24, 1);

  > ul {
    display: flex;
    margin: 0;

    > li {
      margin-right: 20px;
      border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
      font-size: ${({ theme }) => theme.fontSize.mm};
      list-style: none;

      .active {
        color: red;
      }

      > a {
        color: ${({ theme }) => theme.colors.black};
        text-decoration: none;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 7.25rem;
        padding: 1rem 2rem 1rem 12.5rem;

        :hover,
        :active {
          color: red;
        }
      }
    }
  }
`;
