import styled from 'styled-components';

export const Wrapper = styled.div`
  .icon {
    color: ${(layoutColor) => layoutColor.theme.fontColor};
    cursor: pointer;
    position: relative;
    margin: 0.75rem;

    &:hover {
      color: #737c8e;
    }
  }
`;
