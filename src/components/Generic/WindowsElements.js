import styled from 'styled-components';

export const WindowControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 3px;
`;

export const WindowHeader = styled.header(
  ({ theme: { background }, isInvalid }) => `
  display: flex;
  width: 100%;
  height: 2rem;
  padding: 3px 0 3px 0;
  background: ${isInvalid ? background.error : background.properBlue};
`,
);

export const WindowBody = styled.div`
  display: flex;
  flex-direction: ${({ inColumn }) => (inColumn ? 'column' : 'row')};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin: 0;
`;

export const WindowDescription = styled.h3`
  width: 100%;
  margin-left: 3px;
`;

export const MainButton = styled.button`
  border: 1px black solid;
`;
