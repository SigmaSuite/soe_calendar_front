import styled from 'styled-components';

export const PersonTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  &:hover {
    header {
      background: linear-gradient(90deg, navy, #1084d0);
    }
  }
`;

export const PersonHeader = styled.header`
  width: 100%;
  height: 20px;
  padding-right: 0;
`;

export const PersonName = styled.h3``;
export const PersonBody = styled.div`
  height: 100%;
  width: 100%;
`;

export const PersonBodyRow = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
  padding-left: 1rem;

  label {
    width: 9rem;
    margin-right: 0.5rem;
  }
`;

export const PersonContainerButton = styled.button`
  margin-right: 3px;
`;
export const PersonBodyInfo = styled.input`
  width: 60%;
  margin: 0 2rem 0 0;
`;

export const CringeSlider = styled.input`
  width: 100%;
`;
