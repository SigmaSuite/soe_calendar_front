import styled from 'styled-components';

const PersonsListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 120px;
`;

export default PersonsListContainer;
