import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 46rem;
  height: auto;
  margin: auto auto;
  transform: ${({ isMaximized }) => isMaximized && 'scale(2)'};
`;

export const LoginImageContainer = styled.div`
  width: 10rem;
  margin-right: 2rem;
  background: url('ciombor.svg');
  background-color: silver;
  height: 100%;
`;

export const LoginCredentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 25rem;
`;

export const LoginDescription = styled.p`
  margin-bottom: 2rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginFormRow = styled.div`
  display: flex;
  margin-bottom: 1rem;
  label {
    width: 7rem;
  }
  input {
    height: 2.5rem;
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;

  button {
    &:first-child {
      outline: 0.5px black solid;
      margin-bottom: 0.5rem;

      &:active,
      &:focus {
        outline: 0.5px black dotted;
      }
    }
  }
`;

export const LoginHeader = styled.h3`
  margin-left: 3px;
  width: 150rem;
`;
