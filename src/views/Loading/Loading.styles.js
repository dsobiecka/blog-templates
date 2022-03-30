import styled from 'styled-components';

export const Blocks = styled.div`
  color: #efe960;
  font-size: 25px;
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;

  #blocks {
    margin: auto;
  }
  .b {
    background: #efe960;
    border: 3px solid #969242;
    width: 45px;
    height: 45px;
    border-radius: 5px;
    margin: 10px;
    position: relative;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  #b1 {
    animation-name: b1;
  }
  #b2 {
    margin-left: 72.5px;
    animation-name: b2;
  }
  #b3 {
    margin-top: -60px;
    animation-name: b3;
  }
  #b4 {
    margin-left: 72.5px;
    animation-name: b4;
  }

  @keyframes b1 {
    0% {
      left: 0px;
      transform: rotate(0deg);
    }
    50% {
      left: 62.5px;
      bottom: 0px;
      transform: rotate(90deg);
    }
    100% {
      left: 62.5px;
      bottom: -61.25px;
      transform: rotate(90deg);
    }
  }
  @keyframes b2 {
    50% {
      bottom: 0px;
    }
    100% {
      bottom: -61.25px;
    }
  }
  @keyframes b3 {
    50% {
      top: 0px;
    }
    100% {
      top: -61.25px;
    }
  }
  @keyframes b4 {
    0% {
      left: 0px;
      transform: rotate(0deg);
    }
    50% {
      left: -62.5px;
      top: 0px;
      transform: rotate(90deg);
    }
    100% {
      left: -62.5px;
      top: -61.25px;
      transform: rotate(90deg);
    }
  }

  @media (max-width: 400px) {
    width: 100%;

    #caption {
      display: none;
    }
  }
`;
