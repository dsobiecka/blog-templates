import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  max-width: 40%;

  form {
    width: 100%;

    .form-group {
      width: 100%;
      margin-bottom: 2rem;
    }

    label {
      font-size: 1.3rem;
    }

    input,
    textarea {
      height: 30px;
      width: 100%;
      font-size: 1.2rem;
      padding: 1.2rem;
      background-color: ${(layoutColor) => layoutColor.theme.imgBcg};
      border: 1px solid ${(layoutColor) => layoutColor.theme.imgBcg};
      color: #737c8e;
      outline: none;
      border-radius: 8px;
      margin-top: 1rem;
    }

    textarea {
      min-height: 250px;
      resize: vertical;
    }

    button {
      background-color: #c0c7d6;
      border-radius: 18px;
      width: 50%;
      height: 44px;
      border: none;
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`;
