import styled from 'styled-components';

export const SwitchIcon = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #c0c7d6;

  @media (max-width: 850px) {
    padding-bottom: 0;
    border-bottom: none;
    padding-top: 2rem;
  }

  label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #c0c7d6;
      border-radius: 18px;

      &:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: #ffffff;
        transition: 0.4s;
        border-radius: 18px;
      }
    }

    input {
      opacity: 0;
      width: 0;
      height: 0;

      :checked + span {
        background-color: #737c8e;
      }

      :checked + span:before {
        transform: translateX(26px);
      }
    }
  }
`;
