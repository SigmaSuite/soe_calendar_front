import styled from 'styled-components';

export const BirthdayOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 5rem;
`;
export const BirthdayHeader = styled.h3`
  margin: 0;
`;

export const MonthSummary = styled.summary`
  &::before {
    visibility: hidden;
  }
`;

export const BirthdayTreeButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 41.2rem;
  margin-bottom: 0.2rem;
`;

export const BirthdayTree = styled.ul`
  background-color: white;
  list-style: none;
  padding-left: 2rem;
  margin: 0;
  box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf,
    inset 2px 2px #0a0a0a;
  width: 40rem;
  height: 40rem;
  font-size: ${({ theme: { fontSize } }) => fontSize.xLarge} !important;
  overflow-y: auto;
`;
export const BirthdayTreeDate = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

export const BirthdayMonthBranch = styled.li`
  margin-bottom: 0.5rem;
  ul {
    color: black;

    padding-left: 3.5rem;
  }
  summary:hover {
    text-decoration: underline;
  }
  summary:focus {
    outline: none;
  }
`;

export const BirthdayLink = styled.button`
  color: ${({ bdayPassed }) => (bdayPassed ? 'red' : 'green')};
  width: 100%;
  text-align: start;
  border: none;
  box-shadow: none;
  min-height: 0;
  min-width: 0;
  background-color: inherit;
  padding: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.xLarge} !important;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
  &:active,
  &:focus,
  &:not(:disabled):active {
    box-shadow: none;
    outline: none;
    padding: 0;
  }
`;
