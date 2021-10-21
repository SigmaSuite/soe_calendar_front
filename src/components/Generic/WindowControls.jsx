import React from 'react';
import PropTypes from 'prop-types';

import { CloseButton, MaximizeButton, MinimizeButton } from './FunctionButtons';
import { WindowControlsContainer } from './WindowsElements';

export default function WindowControls({ setIsMaximized, closeModal }) {
  return (
    <WindowControlsContainer className="title-bar-controls">
      <MinimizeButton onClick={() => setIsMaximized(false)} />
      <MaximizeButton onClick={() => setIsMaximized(true)} />
      <CloseButton onClick={closeModal} type="button" aria-label="Close" />
    </WindowControlsContainer>
  );
}

WindowControls.propTypes = {
  setIsMaximized: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
