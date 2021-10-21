import { WindowBody } from '@components/Generic/WindowsElements';
import styled from 'styled-components';

export const RegisterWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  height: 50rem;
  margin: auto;

  transform: ${({ isMaximized }) => isMaximized && 'scale(1.5)'};
`;

export const RegisterWindowBody = styled(WindowBody)`
  padding: 2px 0 2px 0;
`;

export const RegisterImageContainer = styled.div`
  display: flex;
  background-image: url('bartek.svg'),
    ${({ isInvalid }) =>
      isInvalid
        ? 'linear-gradient(45deg,#e60a29,#6b6c6c)'
        : 'linear-gradient(45deg, #1212a4, #1084d0)'};
  width: 22rem;
  min-width: 22rem;
  height: 42rem;
`;

export const RegisterWindowContent = styled.div`
  display: flex;
  width: 100%;
  height: 42rem;
  min-height: 42rem;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  padding: 2rem 4rem;

  p:last-of-type {
    margin-top: 4rem;
  }
`;

export const RegisterDescription = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  padding: 0;
  margin: 0 0 2rem 0;
`;

export const RegisterWindowButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  box-shadow: inset 0 0px #0a0a0a, inset 0px 1px #dfdfdf, inset 0 1px gray, inset 0 0px #fff;
  button {
    height: 2.6rem;
    min-height: 2.6rem;

    &:last-child {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
`;

export const RegisterFormRow = styled.div`
  height: 5rem;
  label {
    width: 15rem;
    font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  }
  input[type='number'] {
    box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf,
      inset 2px 2px #0a0a0a;
    padding: 3px 4px;
    box-sizing: border-box;
  }

  input {
    height: 70%;
    width: 100%;
    font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  }
`;
