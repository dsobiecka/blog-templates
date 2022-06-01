import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${(layoutColor) => layoutColor.theme.imgBcg};
  color: ${(layoutColor) => layoutColor.theme.fontColor};
  padding: 15px 0 15px 0;
  position: relative;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
`;

export const PrefooterList = styled.div`
  width: 25%;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;

  h4 {
    font-weight: 600;
    font-size: 1em;
    color: ${(layoutColor) => layoutColor.theme.fontColor};
    position: relative;
    z-index: 0;
    :before {
      content: '';
      background-color: ${(layoutColor) => layoutColor.theme.yellow};
      width: 30%;
      height: 20%;
      position: absolute;
      right: 30%;
      bottom: -20%;
      transform: rotate(-1deg);
      z-index: -1;
    }
  }

  ul {
    margin-top: 20px;
    list-style-type: none;
    padding: 0;

    li {
      font-size: 0.9em;
      padding: 0.2em 0;
    }
  }
`;
