import styled from 'styled-components';

export const PersonFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  margin-top: 20rem;
  transform: ${({ isLarge }) => isLarge && 'scale(2)'};
`;
export const PersonFormHeader = styled.header`
  margin-bottom: 1.5rem;
`;

export const PersonFormInputsContainer = styled.div`
  width: 100%;
  margin-right: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PersonFormInput = styled.input`
  width: 100%;
  height: 100%;
  margin-right: 1rem;
`;

export const PersonFormRow = styled.div`
  margin-bottom: 1rem;
`;

export const PersonFormLabel = styled.label`
  width: 9rem;
  margin-left: 0.5rem;
`;
export const ButtonRow = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: auto;
`;

export const SubmitButton = styled.button`
  width: 8rem;
  margin-left: 0.3rem;
`;
