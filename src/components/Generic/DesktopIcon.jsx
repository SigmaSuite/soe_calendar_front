import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default function DesktopIcon({ Component, name, setCurrentModal }) {
  return (
    <DesktopIconContainer
      onClick={() => setCurrentModal(<Component closeModal={() => setCurrentModal(<></>)} />)}
    >
      <IconImage />
      <IconName>{name}</IconName>
    </DesktopIconContainer>
  );
}

DesktopIcon.propTypes = {
  Component: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setCurrentModal: PropTypes.func.isRequired,
};
