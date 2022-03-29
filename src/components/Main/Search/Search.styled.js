import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 32rem;
  display: flex;
  align-items: center;
  position: relative;

  .searchIcon {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 2.25rem;
    top: calc(50% - 0.75rem);
    color: #737c8e;
  }

  button {
    position: absolute;
    right: 0;
    width: auto;
    height: 100%;
    border-radius: 3rem;
    padding: 0 2rem;
    background-color: #737c8e;
    color: white;
    border: none;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px #c0c7d6;
    }
  }

  input {
    font-size: 1.125rem;
    padding-left: 5.25rem;
    height: 4.5rem;
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    background-repeat: no-repeat;
    width: 100%;
    border-radius: 3rem;
    padding-right: 1.125rem;
    transition: all 0.2s cubic-bezier(0.76, 0, 0.24, 1);
    color: #737c8e;

    &:focus {
      outline: none;
      border-color: #c0c7d6;
      box-shadow: 0 0 10px #c0c7d6;
      background-color: white;
    }
  }
`;
