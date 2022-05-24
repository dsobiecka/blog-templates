import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(layoutColor) => layoutColor.theme.border};
  border-radius: 4.5px;
  background-color: ${(layoutColor) => layoutColor.theme.imgBcg};
  position: relative;
  margin: 0 2.75rem 6.25rem;
  padding: 3rem;
  cursor: pointer;
`;

export const DateAdded = styled.span`
  color: ${(layoutColor) => layoutColor.theme.fontColorsB};
  margin-bottom: 18px;
  font-size: 12px;
`;

export const BoxTitle = styled.h2`
  font-size: 40px;
  position: relative;
  color: ${(layoutColor) => layoutColor.theme.fontColor};

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

export const ShortDescription = styled.p`
  color: ${(layoutColor) => layoutColor.theme.fontColorsB};
  font-size: 17px;
  line-height: 1.8;
`;
