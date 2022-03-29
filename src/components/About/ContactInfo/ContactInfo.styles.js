import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  max-width: 40%;
`;

export const ContactItem = styled.div`
  padding: 2rem;
  background-color: ${(layoutColor) => layoutColor.theme.imgBcg};
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;

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
