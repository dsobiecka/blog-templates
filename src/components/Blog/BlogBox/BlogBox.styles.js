import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${(layoutColor) => layoutColor.theme.border};
  border-radius: 4.5px;
  background-color: ${(layoutColor) => layoutColor.theme.imgBcg};
  position: relative;
`;

export const DateAdded = styled.span`
  color: ${(layoutColor) => layoutColor.theme.fontColorS};
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
  color: ${(layoutColor) => layoutColor.theme.fontColorS};
  font-size: 15px;
  line-height: 1.8;
`;
