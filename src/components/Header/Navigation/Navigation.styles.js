import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${(layoutColor) => layoutColor.theme.body};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 1.25rem;
  z-index: 101;
  border-bottom: 1px solid ${(layoutColor) => layoutColor.theme.border};
  transition: all 0.2s cubic-bezier(0.76, 0, 0.24, 1);

  > ul {
    display: flex;
    margin: 0;

    > li {
      margin-right: 20px;
      border-right: 1px solid ${(layoutColor) => layoutColor.theme.border};
      font-size: 21px;
      list-style: none;
      position: relative;
      font-weight: normal;
      width: 280px;

      .active {
        color: ${(layoutColor) => layoutColor.theme.fontColor};
      }

      .active:before {
        width: calc(100% - 12.5rem);
        content: '';
        background-color: ${(layoutColor) => layoutColor.theme.fontColor};
        height: 3px;
        position: absolute;
        right: 0;
        bottom: -1px;
        transition: all 0.2s cubic-bezier(0.76, 0, 0.24, 1);
      }

      > a {
        color: #c0c7d6;
        text-decoration: none;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 7.25rem;
        padding: 1rem 2rem 1rem 12.5rem;

        :hover,
        :active {
          color: ${(layoutColor) => layoutColor.theme.fontColor};
        }
      }
    }
  }
`;
