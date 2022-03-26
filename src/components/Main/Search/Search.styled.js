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
    color: ${({ theme }) => theme.colors.darkGrey};
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
    color: ${({ theme }) => theme.colors.darkGrey};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.grey};
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.grey};
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
