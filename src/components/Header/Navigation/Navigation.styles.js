import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${(layoutColor) => layoutColor.theme.body};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 1.25rem;
  z-index: 101;
  border-bottom: 1px solid ${(layoutColor) => layoutColor.theme.border};

  @media (max-width: 850px) {
    display: none;
    transition: 1s ease;
  }

  ul {
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

        &:before {
          width: calc(100% - 12.5rem);
          content: '';
          background-color: ${(layoutColor) => layoutColor.theme.fontColor};
          height: 3px;
          position: absolute;
          right: auto;
          bottom: -1px;
          transition: all 0.2s cubic-bezier(0.76, 0, 0.24, 1);
        }
      }

      > a {
        color: ${(layoutColor) => layoutColor.theme.fontColor};
        text-decoration: none;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 7.25rem;
        padding: 1rem 2rem 1rem 12.5rem;

        :hover {
          color: ${(layoutColor) => layoutColor.theme.fontColor};
        }
      }
    }
  }

  @media (max-width: 850px) {
    ul {
      margin: 1rem auto 0;
      align-items: center;
      flex-direction: column;
      padding-left: 0;

      li {
        margin: 20px 0 20px 0;
        border: none;

        a {
          font-size: 20px;
          color: ${(layoutColor) => layoutColor.theme.fontColor};
          font-weight: bold;
          padding: 0;
          height: auto;
          border: none;
          align-items: center;
          justify-content: center;

          &:before {
            right: auto;
          }
        }
      }
    }
  }
`;

export const Changer = styled.div`
  display: flex;
  margin-right: 1.5rem;

  .menu {
    cursor: pointer;
    margin-right: 1rem;
    display: none;
    z-index: 2;
  }

  @media (max-width: 850px) {
    .menu {
      display: block !important;
      fill: ${(layoutColor) => layoutColor.theme.fontColor};
    }
  }
`;

export const Closed = styled.div`
  .close {
    display: none;
  }

  @media (max-width: 850px) {
    .close {
      display: block !important;
      fill: ${(layoutColor) => layoutColor.theme.fontColor};
    }
  }
`;
