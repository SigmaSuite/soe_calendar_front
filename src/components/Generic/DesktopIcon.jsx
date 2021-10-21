import React from 'react';
import styled from 'styled-components';

export const DesktopIconContainer = styled.div`
  position: relative;
  width: 5rem;
  height: 6rem;
  margin: 3rem;
`;

export const IconImage = styled.div`
  background-color: silver;
  height: 5rem;
  width: 100%;
`;

export const IconName = styled.h4`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  margin: 0;
  margin-top: 1rem;
  text-align: center;
`;

export default function DesktopIcon({ component, name, setCurrentModal }) {
  return (
    <DesktopIconContainer onClick={() => setCurrentModal(component)}>
      <IconImage />
      <IconName>{name}</IconName>
    </DesktopIconContainer>
  );
}
