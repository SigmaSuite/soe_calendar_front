/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const CloseButton = ({ children, onClick }) => (
  <button onClick={onClick} type="button" aria-label="Close">
    {children}
  </button>
);

export const MinimizeButton = ({ children, onClick }) => (
  <button onClick={onClick} type="button" aria-label="Minimize">
    {children}
  </button>
);

export const MaximizeButton = ({ children, onClick }) => (
  <button onClick={onClick} type="button" aria-label="Maximize">
    {children}
  </button>
);

export const CollapseButton = styled.button`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding: 0 8px;
  min-width: 2rem;
  width: 2.5rem;
  height: 2.5rem;

  &:active,
  &:focus,
  &:not(:disabled):active {
    padding: initial;
  }
`;

const buttons = {
  CloseButton,
  MinimizeButton,
  MaximizeButton,
  CollapseButton,
};

export default buttons;
