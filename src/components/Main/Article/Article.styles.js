import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${(layoutColor) => layoutColor.theme.border};
  border-radius: 4.5px;
  background-color: ${(layoutColor) => layoutColor.theme.imgBcg};
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &:after {
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
`;

export const WhiteBox = styled.div`
  background-color: ${(layoutColor) => layoutColor.theme.articleBox};
  border-radius: 4.5px;
  box-shadow: 0 3.75rem 5rem -1.875rem rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  padding: 35px;
  cursor: pointer;
  width: 70%;
  position: absolute;
  bottom: -30px;
  left: 30px;
  z-index: 1;
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
