import styled from 'styled-components';

export const CalendarWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 65rem;
  margin: auto;
  transform: ${({ isMaximized }) => isMaximized && 'scale(1.25)'};
`;

export const CalendarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem 10rem 2rem 5rem;
`;

export const CalendarOptionsSwitch = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 2.4rem;
  margin-left: 1.2rem;
`;

export const CalendarOptionsButton = styled.button`
  border-radius: 3px 3px 0 0;
  box-shadow: ${({ isActive }) =>
    isActive
      ? ' -1px -1px #0a0a0a, 0 2px silver, -2px -2px grey, 2px 2px #dfdfdf, -1px -1px #0a0a0a'
      : 'inset -1px 1px #ffffff, inset 1px 1px #fff, inset 0px 2px #dfdfdf, inset 0px 2px #dfdfdf'};
  height: ${({ isActive }) => (isActive ? '2.5rem' : '2.2rem')};
  min-height: 2.2rem;
  z-index: 2;

  &:focus {
    outline: none;
  }

  &:active,
  &:not(:disabled):active {
    box-shadow: ${({ isActive }) =>
      isActive
        ? '-1px -1px #0a0a0a,0 2px silver,-2px -2px grey,2px 2px #dfdfdf,-1px -1px #0a0a0a'
        : 'inset -1px 0px #fff, inset 1px 0px #0a0a0a, inset -2px 0px #dfdfdf, inset 2px 2px gray'};
      padding: ${({ isActive }) => (isActive ? '0 12px' : '2px 11px 0 13px')}
`;

export const CalendarOption = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey,
    inset 2px 2px #fff;
`;
